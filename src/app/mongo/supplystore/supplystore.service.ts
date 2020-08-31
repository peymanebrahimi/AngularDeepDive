import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplystoreService {
  url = `${environment.apiUrl}/Sale`;

  constructor(private http: HttpClient) { }

  getData(pageIndex = 0, pageSize = 10, sortColumn = "", sortOrder = "ASC", filterColumn = "", filterQuery = "") {

    let params = new HttpParams()
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString())
      .set('sortColumn', sortColumn)
      .set('sortOrder', sortOrder);

    if (filterQuery) {
      params = params
        .set("filterColumn", filterColumn)
        .set("filterQuery", filterQuery);
    }

    return this.http.get<any>(this.url, { params });
  }
  
}
