import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router, Event } from '@angular/router';
import { fromEvent, interval, Observable, Subject } from 'rxjs';
import { map, take, concatAll, takeUntil } from 'rxjs/operators';
import { environment } from "../environments/environment";
import { PromptUpdateService } from "./_services/prompt-update.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngDeepDive';
  loading$: Observable<boolean>;
  isSmallDevice = false;

  @ViewChild(MatSidenav, { static: false })
  sidenav: MatSidenav;

  private _onDestroy = new Subject<void>();

  constructor(private promptUpdateService: PromptUpdateService,
    // private authService: AuthService,
    private router: Router,

    private breakpointObserver: BreakpointObserver) {

    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .pipe(takeUntil(this._onDestroy))
      .subscribe(result => {
        if (result.matches) {
          this.isSmallDevice = true;
        } else {
          this.isSmallDevice = false;
        }
      });
  }

  ngOnInit() {
    // // https://rxjs-dev.firebaseapp.com/api/operators/concatAll
    // const clicks = fromEvent(document, 'click');
    // const higherOrder = clicks.pipe(
    //   map(ev => interval(1000).pipe(take(4))),
    // );
    // const firstOrder = higherOrder.pipe(concatAll());
    // firstOrder.subscribe(x => console.log(x));


    this.router.events
      .pipe(takeUntil(this._onDestroy))
      .subscribe((routerEvent: Event) => {
        if (this.isSmallDevice) {
          this.sidenav.close();
        }
        this.checkRouterEvent(routerEvent);
      });

  }



  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      // this.loading = true;
      // this.spinnerSvc.show('mySpinner');
    }
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      // this.loading = false;
      // this.spinnerSvc.hide('mySpinner');
    }
  }

}
