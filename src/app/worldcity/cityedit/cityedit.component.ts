import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { City } from '../city';
import { Country } from "../country";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cityedit',
  templateUrl: './cityedit.component.html',
  styleUrls: ['./cityedit.component.css']
})
export class CityeditComponent implements OnInit {

  title: string;
  form: FormGroup;
  city: City;
  id?: number;
  countries: Country[];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lat: new FormControl('', [Validators.required]),
      lon: new FormControl('', [Validators.required]),
      countryId: new FormControl('', [Validators.required])
    }, null, this.isDupeCity());

    this.loadData();
  }

  loadData() {
    this.loadCountries();

    this.id = +this.activatedRoute.snapshot.paramMap.get('id');

    if (this.id) {
      // edit mode
      let url = `${environment.serverUrl}/api/cities/${this.id}`;
      this.http.get<City>(url)
        .subscribe(result => {
          this.city = result;
          this.title = `Edit - ${this.city.name}`;

          this.form.patchValue(this.city);
        },
          console.error);
    } else {
      // new mode
      this.title = "Create a new City";

    }

  }

  loadCountries() {
    // fetch all the countries from the server
    var url = environment.serverUrl + "/api/countries";
    var params = new HttpParams()
      .set("pageSize", "9999")
      .set("sortColumn", "name")
      .set("sortOrder", "asc");

    this.http.get<any>(url, { params })
      .subscribe(result => {
        this.countries = result.data;
      }, error => console.error(error));
  }

  onSubmit2() {
    let c = this.form.value;
    console.info("c: ", c);
    let model = { ...this.city, ...c };
    console.log("model: ", model);
    console.info("this.city", this.city);
  }

  onSubmit() {
    var city = (this.id) ? this.city : <City>{};

    city.name = this.form.get('name').value;
    city.lat = this.form.get('lat').value;
    city.lon = this.form.get('lon').value;
    city.countryId = +this.form.get("countryId").value;

    if (this.id) {
      // EDIT mode
      var url = environment.serverUrl + "/api/cities/" + this.city.id;
      this.http.put<City>(url, city)
        .subscribe(result => {
          console.log("City " + city.id + " has been updated.");
          // go back to cities view
          this.router.navigate(['../cities']);
        }, error => console.log(error));
    }
    else {
      // ADD NEW mode
      var url = environment.serverUrl + "/api/cities";
      this.http.post<City>(url, city)
        .subscribe(result => {
          console.log("City " + result.id + " has been created.");
          // go back to cities view
          this.router.navigate(['../cities']);
        }, error => console.log(error));
    }
  }

  isDupeCity(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{
      [key: string]: any
    } | null> => {
      var city = <City>{};
      city.id = (this.id) ? this.id : 0;
      city.name = this.form.get("name").value;
      city.lat = this.form.get("lat").value;
      city.lon = this.form.get("lon").value;
      city.countryId = +this.form.get("countryId").value;

      var url = environment.serverUrl + "/api/cities/IsDupeCity";

      return this.http.post<boolean>(url, city).pipe(map(result => {
        return (result ? { isDupeCity: true } : null);
      }));
    }
  }
}

/*
the asynchronous validators will only be checked
when all the synchronous validators return true.
*/
