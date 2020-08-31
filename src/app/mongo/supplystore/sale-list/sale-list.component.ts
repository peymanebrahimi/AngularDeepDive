import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelectChange } from '@angular/material/select';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fromEvent, merge, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Sale } from "../models/sale";
import { SupplystoreService } from "../supplystore.service";

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class SaleListComponent implements OnInit {
  private _onDestroy = new Subject<void>();
  url = `${environment.apiUrl}/Sale`;

  defaultPageIndex: number = 0;
  defaultPageSize: number = 10;
  defaultSortColumn: string = "id";
  defaultSortOrder: string = "asc";
  filterColumn: string = "customer.email";
  filterQuery: string = null;

  dataSource = new MatTableDataSource<Sale>();

  displayedColumns: string[] = ['customer.email', 'customer.gender', 'customer.age', 'saleDate', 'storeLocation', 'purchaseMethod'];

  selectedFilter = this.displayedColumns[0];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('input') input: ElementRef;

  expandedElement: Sale | null;

  constructor(private supplystoreService: SupplystoreService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.pipe(takeUntil(this._onDestroy)).subscribe(() => this.paginator.pageIndex = this.defaultPageIndex);

    let search$ = fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        tap(() => {
          this.filterQuery = this.input.nativeElement.value;
          this.paginator.pageIndex = this.defaultPageIndex;
        })
      );

    merge(this.sort.sortChange, this.paginator.page, search$)
      .pipe(
        startWith(''),
        switchMap(x => this.getData()),
        map(result => {
          this.paginator.length = result.totalCount;

          this.dataSource.data = result.data;
        }),
        takeUntil(this._onDestroy)
      )
      .subscribe(x => console.log("merge subscribe: ", x))
  }

  getData() {

    let pageIndex = this.paginator ? this.paginator.pageIndex : this.defaultPageIndex;
    let pageSize = this.paginator ? this.paginator.pageSize : this.defaultPageSize;

    let sortColumn = this.sort ? this.sort.active : this.defaultSortColumn;
    let sortOrder = this.sort ? this.sort.direction : this.defaultSortOrder;
    let filterColumn = "";
    let filterQuery = "";

    if (this.filterQuery) {
      filterColumn = this.filterColumn;
      filterQuery = this.filterQuery;
    }

    return this.supplystoreService.getData(pageIndex, pageSize, sortColumn,
      sortOrder, filterColumn, filterQuery)

  }

  selectionChange(event: MatSelectChange) {
    let lastQ = this.input.nativeElement.value;

    this.filterColumn = event.value;
    this.filterQuery = '';
    this.input.nativeElement.value = '';

    this.paginator.pageIndex = this.defaultPageIndex;

    if (lastQ) {
      const evnt = new KeyboardEvent('keyup', {
        bubbles: true, cancelable: true, shiftKey: false
      });
      this.input.nativeElement.dispatchEvent(evnt);
    }

  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

}
