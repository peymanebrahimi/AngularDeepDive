import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from "../country";
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  url = `${environment.serverUrl}/api/countries`;

  defaultPageIndex: number = 0;
  defaultPageSize: number = 10;
  defaultSortColumn: string = "name";
  defaultSortOrder: SortDirection = "asc";
  defaultFilterColumn: string = "name";
  filterQuery: string | null = null;

  countries = new MatTableDataSource<Country>();

  displayedColumns: string[] = ['id', 'name', 'iso2', 'iso3'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(query: KeyboardEvent | null = null): void {
    let pageEvent = new PageEvent();
    pageEvent.pageIndex = this.defaultPageIndex;
    pageEvent.pageSize = this.defaultPageSize;
    if (query != null) {
      this.filterQuery = (<HTMLInputElement>query.target).value;
    }
    this.getData(pageEvent);
  }

  getData(event: PageEvent) {
    let params = new HttpParams()
      .set('pageIndex', event.pageIndex.toString())
      .set('pageSize', event.pageSize.toString())
      .set('sortColumn', this.sort ? this.sort.active : this.defaultSortColumn)
      .set('sortOrder', this.sort ? this.sort.direction : this.defaultSortOrder);

    if (this.filterQuery) {
      params = params
        .set("filterColumn", this.defaultFilterColumn)
        .set("filterQuery", this.filterQuery!);
    }

    this.http.get<any>(this.url, { params })
      .subscribe(result => {
        this.paginator.length = result.totalCount;
        // this.paginator.pageIndex = result.pageIndex;
        // this.paginator.pageSize = result.pageSize;

        this.countries.data = result.data;

      },
        error => console.error(error));
  }

}
