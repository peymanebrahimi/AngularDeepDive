import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Country } from '../country';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-countryedit',
  templateUrl: './countryedit.component.html',
  styleUrls: ['./countryedit.component.css']
})
export class CountryeditComponent implements OnInit {

  title: string;
  form: FormGroup;
  country: Country;
  id?: number;

  constructor(private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private http: HttpClient,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',
        Validators.required,
        this.isDupeField("name")
      ],
      iso2: ['',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]{2}')
        ],
        this.isDupeField("iso2")
      ],
      iso3: ['',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]{3}')
        ],
        this.isDupeField("iso3")
      ]
    });
    this.loadData();
  }

  loadData() {
    // retrieve the ID from the 'id'
    this.id = +this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      // EDIT MODE
      // fetch the country from the server
      var url = environment.serverUrl + "/api/countries/" + this.id;
      this.http.get<Country>(url).subscribe(result => {
        this.country = result;
        this.title = "Edit - " + this.country.name;
        // update the form with the country value
        this.form.patchValue(this.country);
      }, error => console.error(error));
    }
    else {
      // ADD NEW MODE
      this.title = "Create a new Country";
    }

  }

  onSubmit() {
    var country = (this.id) ? this.country : <Country>{};
    country.name = this.form.get("name").value;
    country.iso2 = this.form.get("iso2").value;
    country.iso3 = this.form.get("iso3").value;
    if (this.id) {
      // EDIT mode
      var url = environment.serverUrl + "/api/countries/" + this.country.id;
      this.http
        .put<Country>(url, country)
        .subscribe(result => {
          console.log("Country " + country.id + " has been updated.");
          // go back to cities view
          this.router.navigate(['/countries']);
        }, error => console.log(error));
    }
    else {
      // ADD NEW mode
      var url = environment.serverUrl + "/api/countries";
      this.http
        .post<Country>(url, country)
        .subscribe(result => {
          console.log("Country " + result.id + " has been created.");
          // go back to cities view
          this.router.navigate(['/countries']);
        }, error => console.log(error));
    }
  }

  isDupeField(fieldName: string): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{
      [key: string]: any
    } | null> => {
      var params = new HttpParams()
        .set("countryId", (this.id) ? this.id.toString() : "0")
        .set("fieldName", fieldName)
        .set("fieldValue", control.value);
      var url = environment.serverUrl + "/api/countries/IsDupeField";
      return this.http.post<boolean>(url, null, { params })
        .pipe(map(result => {
          return (result ? { isDupeField: true } : null);
        }));
    }
  }

}
