import { Injectable } from '@angular/core';
import { OidcClientNotification, OidcSecurityService, PublicConfiguration } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { IUserData } from "./userData";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  redirectUrl = '';
  configuration: PublicConfiguration;
  userDataChanged$: Observable<OidcClientNotification<any>>;
  userData$: Observable<IUserData>;
  isAuthenticated$: Observable<boolean>;

  constructor(private oidcSecurityService: OidcSecurityService) {

    this.oidcSecurityService.checkAuth().subscribe((auth) => console.log('is authenticated', auth));

    this.configuration = this.oidcSecurityService.configuration;
    this.userData$ = this.oidcSecurityService.userData$;
    this.isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;

  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff();
  }

  forceRefreshSession() {
    this.oidcSecurityService.forceRefreshSession().subscribe((result) => console.warn(result));
  }


  checkAuth() {
    return this.oidcSecurityService.checkAuth();
  }

  get token() {
    return this.oidcSecurityService.getToken();
  }

  // get userData(){
  //   return this.userData$.pipe()
  //   .subscribe();
  // }
  
}
