import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/app/_services/auth.service';
import { TestService } from "../test.service";

@Component({
  selector: 'app-testuser1',
  templateUrl: './testuser1.component.html',
  styleUrls: ['./testuser1.component.css']
})
export class Testuser1Component implements OnInit {
  private _onDestroy = new Subject<void>();

  constructor(private testService: TestService,
    public authService: AuthService) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  callApi() {
    this.testService.getUser()
      .pipe(takeUntil(this._onDestroy))
      .subscribe(x => console.log(x));

  }

  
  forceRefreshSession() {
    this.authService.forceRefreshSession();
  }
}
