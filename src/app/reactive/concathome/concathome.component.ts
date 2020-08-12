import { Component, OnInit } from '@angular/core';
import { of, concat } from 'rxjs';

@Component({
  selector: 'app-concathome',
  templateUrl: './concathome.component.html',
  styleUrls: ['./concathome.component.css']
})
export class ConcathomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const series1$ = of('a', 'b');

    const series2$ = of('x', 'y');

    const result$ = concat(series1$, series2$);

    result$.subscribe(console.log);
  }


  code = `
  const series1$ = of('a', 'b');

  const series2$ = of('x', 'y');

  const result$ = concat(series1$, series2$);

  result$.subscribe(console.log);  
  `;
}
