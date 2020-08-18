import { Component } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, take, concatAll } from 'rxjs/operators';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngDeepDive';

  constructor() {
   
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
