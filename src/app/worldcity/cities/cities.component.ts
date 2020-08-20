import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { City } from '../city';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  url = `${environment.apiUrl}/cities`;

  // cities: MatTableDataSource<City>;
  cities = new MatTableDataSource<City>();

  displayedColumns: string[] = ['id', 'name', 'lat', 'lon'];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let pageEvent = new PageEvent();
    pageEvent.pageIndex = 0;
    pageEvent.pageSize = 5;
    this.getData(pageEvent);
  }

  getData(event: PageEvent) {
    let params = new HttpParams()
      .set('pageIndex', event.pageIndex.toString())
      .set('pageSize', event.pageSize.toString());

    this.http.get<any>(this.url, { params })
      .subscribe(result => {
        this.paginator.length = result.totalCount;
        // this.paginator.pageIndex = result.pageIndex;
        // this.paginator.pageSize = result.pageSize;
         
        this.cities.data = result.data;
      
      },
        error => console.error(error));
  }

}

/*
So as a rule of thumb you can go for the following:

{ static: true } needs to be set when you want to access the ViewChild in ngOnInit.

{ static: false } can only be accessed in ngAfterViewInit.
This is also what you want to go for when you have a structural directive (i.e. *ngIf) on your element in your template.
*/
