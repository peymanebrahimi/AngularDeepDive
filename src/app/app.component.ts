import { Component } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, take, concatAll } from 'rxjs/operators';
import * as Parse from 'parse';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngDeepDive';

  constructor() {
    Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/'
  }
  ngOnInit() {
    // // https://rxjs-dev.firebaseapp.com/api/operators/concatAll
    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(
    //   map(ev => interval(1000).pipe(take(4))),
    // );
    // const firstOrder = higherOrder.pipe(concatAll());
    // firstOrder.subscribe(x => console.log(x));
  }


}
