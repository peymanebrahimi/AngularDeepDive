(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{zRUs:function(t,e,i){"use strict";i.r(e),i.d(e,"WorldcityModule",(function(){return Lt}));var r=i("ofXK"),n=i("tyNb"),o=i("AytR"),c=i("tk/3"),a=i("+0xr"),l=i("M9IT"),s=i("Dh3D"),u=i("fXoL"),b=i("kmnG"),d=i("qFsG");function m(t,e){1&t&&(u.Ub(0,"p"),u.Ub(1,"em"),u.Cc(2,"Loading..."),u.Tb(),u.Tb())}const f=function(){return["../city"]};function h(t,e){1&t&&(u.Ub(0,"div",14),u.Ub(1,"button",15),u.Cc(2," Add a new City "),u.Tb(),u.Tb()),2&t&&(u.Cb(1),u.lc("routerLink",u.nc(1,f)))}function p(t,e){1&t&&(u.Ub(0,"mat-header-cell",16),u.Cc(1,"ID"),u.Tb())}function g(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Cc(1),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.Dc(t.id)}}function C(t,e){1&t&&(u.Ub(0,"mat-header-cell",16),u.Cc(1,"Name"),u.Tb())}const y=function(t){return["../city",t]};function v(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Ub(1,"a",17),u.Cc(2),u.Tb(),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.lc("routerLink",u.oc(2,y,t.id)),u.Cb(1),u.Dc(t.name)}}function U(t,e){1&t&&(u.Ub(0,"mat-header-cell",16),u.Cc(1,"Latitude"),u.Tb())}function T(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Cc(1),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.Dc(t.lat)}}function I(t,e){1&t&&(u.Ub(0,"mat-header-cell",16),u.Cc(1,"Longitude"),u.Tb())}function S(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Cc(1),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.Dc(t.lon)}}function D(t,e){1&t&&u.Pb(0,"mat-header-row")}function w(t,e){1&t&&u.Pb(0,"mat-row")}const B=function(){return[10,20,50]};let O=(()=>{class t{constructor(t){this.http=t,this.url=o.a.apiUrl+"/cities",this.defaultPageIndex=0,this.defaultPageSize=10,this.defaultSortColumn="name",this.defaultSortOrder="asc",this.defaultFilterColumn="name",this.filterQuery=null,this.cities=new a.k,this.displayedColumns=["id","name","lat","lon"]}ngOnInit(){this.loadData()}loadData(t=null){let e=new l.c;e.pageIndex=this.defaultPageIndex,e.pageSize=this.defaultPageSize,t&&(this.filterQuery=t),this.getData(e)}getData(t){let e=(new c.c).set("pageIndex",t.pageIndex.toString()).set("pageSize",t.pageSize.toString()).set("sortColumn",this.sort?this.sort.active:this.defaultSortColumn).set("sortOrder",this.sort?this.sort.direction:this.defaultSortOrder);this.filterQuery&&(e=e.set("filterColumn",this.defaultFilterColumn).set("filterQuery",this.filterQuery)),this.http.get(this.url,{params:e}).subscribe(t=>{this.paginator.length=t.totalCount,this.cities.data=t.data},t=>console.error(t))}}return t.\u0275fac=function(e){return new(e||t)(u.Ob(c.a))},t.\u0275cmp=u.Ib({type:t,selectors:[["app-cities"]],viewQuery:function(t,e){var i;1&t&&(u.xc(l.a,!0),u.Fc(s.a,!0)),2&t&&(u.qc(i=u.cc())&&(e.paginator=i.first),u.qc(i=u.cc())&&(e.sort=i.first))},decls:22,vars:12,consts:[[4,"ngIf"],["class","commands text-right",4,"ngIf"],[3,"hidden"],["matInput","","placeholder","Filter by name (or part of it)...",3,"keyup"],["matSort","",1,"mat-elevation-z8",3,"dataSource","hidden","matSortActive","matSortDirection","matSortChange"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","lat"],["matColumnDef","lon"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSize","pageSizeOptions","page"],[1,"commands","text-right"],["type","button",1,"btn","btn-success",3,"routerLink"],["mat-sort-header",""],[3,"routerLink"]],template:function(t,e){1&t&&(u.Ub(0,"p"),u.Cc(1,"Here's a list of cities: feel free to play with it."),u.Tb(),u.Bc(2,m,3,0,"p",0),u.Bc(3,h,3,2,"div",1),u.Ub(4,"mat-form-field",2),u.Ub(5,"input",3),u.bc("keyup",(function(t){return e.loadData(t.target.value)})),u.Tb(),u.Tb(),u.Ub(6,"mat-table",4),u.bc("matSortChange",(function(){return e.loadData()})),u.Sb(7,5),u.Bc(8,p,2,0,"mat-header-cell",6),u.Bc(9,g,2,1,"mat-cell",7),u.Rb(),u.Sb(10,8),u.Bc(11,C,2,0,"mat-header-cell",6),u.Bc(12,v,3,4,"mat-cell",7),u.Rb(),u.Sb(13,9),u.Bc(14,U,2,0,"mat-header-cell",6),u.Bc(15,T,2,1,"mat-cell",7),u.Rb(),u.Sb(16,10),u.Bc(17,I,2,0,"mat-header-cell",6),u.Bc(18,S,2,1,"mat-cell",7),u.Rb(),u.Bc(19,D,1,0,"mat-header-row",11),u.Bc(20,w,1,0,"mat-row",12),u.Tb(),u.Ub(21,"mat-paginator",13),u.bc("page",(function(t){return e.getData(t)})),u.Tb()),2&t&&(u.Cb(2),u.lc("ngIf",!e.cities),u.Cb(1),u.lc("ngIf",e.cities),u.Cb(1),u.lc("hidden",!e.cities),u.Cb(2),u.mc("matSortActive",e.defaultSortColumn),u.mc("matSortDirection",e.defaultSortOrder),u.lc("dataSource",e.cities)("hidden",!e.cities),u.Cb(13),u.lc("matHeaderRowDef",e.displayedColumns),u.Cb(1),u.lc("matRowDefColumns",e.displayedColumns),u.Cb(1),u.lc("pageSize",10)("pageSizeOptions",u.nc(11,B)))},directives:[r.l,b.c,d.b,a.j,s.a,a.c,a.e,a.b,a.g,a.i,l.a,n.c,a.d,s.b,a.a,n.e,a.f,a.h],styles:[""]}),t})();var P=i("bTqV");const k=function(){return["cities"]},L=function(){return["countries"]};let q=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Ib({type:t,selectors:[["app-worldhome"]],decls:8,vars:4,consts:[[1,"mb-3"],["mat-raised-button","","color","primary","routerLinkActive","router-link-active",1,"mx-2",3,"routerLink"]],template:function(t,e){1&t&&(u.Ub(0,"p"),u.Cc(1,"WorldCity Home"),u.Tb(),u.Ub(2,"nav",0),u.Ub(3,"a",1),u.Cc(4,"Cities"),u.Tb(),u.Ub(5,"a",1),u.Cc(6,"Countries"),u.Tb(),u.Tb(),u.Pb(7,"router-outlet")),2&t&&(u.Cb(3),u.lc("routerLink",u.nc(2,k)),u.Cb(2),u.lc("routerLink",u.nc(3,L)))},directives:[P.a,n.e,n.d,n.g],styles:[""]}),t})();function x(t,e){1&t&&(u.Ub(0,"p"),u.Ub(1,"em"),u.Cc(2,"Loading..."),u.Tb(),u.Tb())}const A=function(){return["../country"]};function R(t,e){1&t&&(u.Ub(0,"div",14),u.Ub(1,"button",15),u.Cc(2," Add a new Country "),u.Tb(),u.Tb()),2&t&&(u.Cb(1),u.lc("routerLink",u.nc(1,A)))}function z(t,e){1&t&&(u.Ub(0,"mat-header-cell",16),u.Cc(1,"ID"),u.Tb())}function F(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Cc(1),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.Dc(t.id)}}function H(t,e){1&t&&(u.Ub(0,"mat-header-cell",16),u.Cc(1,"Name"),u.Tb())}const M=function(t){return["../country",t]};function N(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Ub(1,"a",17),u.Cc(2),u.Tb(),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.lc("routerLink",u.oc(2,M,t.id)),u.Cb(1),u.Dc(t.name)}}function Q(t,e){1&t&&(u.Ub(0,"mat-header-cell",16),u.Cc(1,"ISO2"),u.Tb())}function $(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Cc(1),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.Dc(t.iso2)}}function j(t,e){1&t&&(u.Ub(0,"mat-header-cell",16),u.Cc(1,"ISO3"),u.Tb())}function _(t,e){if(1&t&&(u.Ub(0,"mat-cell"),u.Cc(1),u.Tb()),2&t){const t=e.$implicit;u.Cb(1),u.Dc(t.iso3)}}function G(t,e){1&t&&u.Pb(0,"mat-header-row")}function V(t,e){1&t&&u.Pb(0,"mat-row")}const E=function(){return[10,20,50]};let J=(()=>{class t{constructor(t){this.http=t,this.url=o.a.apiUrl+"/countries",this.defaultPageIndex=0,this.defaultPageSize=10,this.defaultSortColumn="name",this.defaultSortOrder="asc",this.defaultFilterColumn="name",this.filterQuery=null,this.countries=new a.k,this.displayedColumns=["id","name","iso2","iso3"]}ngOnInit(){this.loadData()}loadData(t=null){let e=new l.c;e.pageIndex=this.defaultPageIndex,e.pageSize=this.defaultPageSize,t&&(this.filterQuery=t),this.getData(e)}getData(t){let e=(new c.c).set("pageIndex",t.pageIndex.toString()).set("pageSize",t.pageSize.toString()).set("sortColumn",this.sort?this.sort.active:this.defaultSortColumn).set("sortOrder",this.sort?this.sort.direction:this.defaultSortOrder);this.filterQuery&&(e=e.set("filterColumn",this.defaultFilterColumn).set("filterQuery",this.filterQuery)),this.http.get(this.url,{params:e}).subscribe(t=>{this.paginator.length=t.totalCount,this.countries.data=t.data},t=>console.error(t))}}return t.\u0275fac=function(e){return new(e||t)(u.Ob(c.a))},t.\u0275cmp=u.Ib({type:t,selectors:[["app-countries"]],viewQuery:function(t,e){var i;1&t&&(u.xc(l.a,!0),u.Fc(s.a,!0)),2&t&&(u.qc(i=u.cc())&&(e.paginator=i.first),u.qc(i=u.cc())&&(e.sort=i.first))},decls:22,vars:12,consts:[[4,"ngIf"],["class","commands text-right",4,"ngIf"],[3,"hidden"],["matInput","","placeholder","Filter by name (or part of it)...",3,"keyup"],["matSort","",1,"mat-elevation-z8",3,"dataSource","hidden","matSortActive","matSortDirection","matSortChange"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","iso2"],["matColumnDef","iso3"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSize","pageSizeOptions","page"],[1,"commands","text-right"],["type","button",1,"btn","btn-success",3,"routerLink"],["mat-sort-header",""],[3,"routerLink"]],template:function(t,e){1&t&&(u.Ub(0,"p"),u.Cc(1,"Here's a list of countries: feel free to play with it."),u.Tb(),u.Bc(2,x,3,0,"p",0),u.Bc(3,R,3,2,"div",1),u.Ub(4,"mat-form-field",2),u.Ub(5,"input",3),u.bc("keyup",(function(t){return e.loadData(t.target.value)})),u.Tb(),u.Tb(),u.Ub(6,"mat-table",4),u.bc("matSortChange",(function(){return e.loadData()})),u.Sb(7,5),u.Bc(8,z,2,0,"mat-header-cell",6),u.Bc(9,F,2,1,"mat-cell",7),u.Rb(),u.Sb(10,8),u.Bc(11,H,2,0,"mat-header-cell",6),u.Bc(12,N,3,4,"mat-cell",7),u.Rb(),u.Sb(13,9),u.Bc(14,Q,2,0,"mat-header-cell",6),u.Bc(15,$,2,1,"mat-cell",7),u.Rb(),u.Sb(16,10),u.Bc(17,j,2,0,"mat-header-cell",6),u.Bc(18,_,2,1,"mat-cell",7),u.Rb(),u.Bc(19,G,1,0,"mat-header-row",11),u.Bc(20,V,1,0,"mat-row",12),u.Tb(),u.Ub(21,"mat-paginator",13),u.bc("page",(function(t){return e.getData(t)})),u.Tb()),2&t&&(u.Cb(2),u.lc("ngIf",!e.countries),u.Cb(1),u.lc("ngIf",e.countries),u.Cb(1),u.lc("hidden",!e.countries),u.Cb(2),u.mc("matSortActive",e.defaultSortColumn),u.mc("matSortDirection",e.defaultSortOrder),u.lc("dataSource",e.countries)("hidden",!e.countries),u.Cb(13),u.lc("matHeaderRowDef",e.displayedColumns),u.Cb(1),u.lc("matRowDefColumns",e.displayedColumns),u.Cb(1),u.lc("pageSize",10)("pageSizeOptions",u.nc(11,E)))},directives:[r.l,b.c,d.b,a.j,s.a,a.c,a.e,a.b,a.g,a.i,l.a,n.c,a.d,s.b,a.a,n.e,a.f,a.h],styles:[""]}),t})();var K=i("3Pt+"),W=i("lJxs"),X=i("d3UM"),Z=i("FKr1");function Y(t,e){1&t&&(u.Ub(0,"p"),u.Ub(1,"em"),u.Cc(2,"loading ..."),u.Tb(),u.Tb())}function tt(t,e){1&t&&(u.Ub(0,"div",14),u.Ub(1,"strong"),u.Cc(2,"ERROR"),u.Tb(),u.Cc(3,": A city with the same "),u.Ub(4,"i"),u.Cc(5,"name"),u.Tb(),u.Cc(6,", "),u.Ub(7,"i"),u.Cc(8,"lat"),u.Tb(),u.Cc(9,", "),u.Ub(10,"i"),u.Cc(11,"lon"),u.Tb(),u.Cc(12," and "),u.Ub(13,"i"),u.Cc(14,"country"),u.Tb(),u.Cc(15," already exists. "),u.Tb())}function et(t,e){1&t&&(u.Ub(0,"div"),u.Cc(1," Name is required. "),u.Tb())}function it(t,e){if(1&t&&(u.Ub(0,"mat-error"),u.Bc(1,et,2,0,"div",1),u.Tb()),2&t){const t=u.fc();u.Cb(1),u.lc("ngIf",null==t.form.get("name").errors?null:t.form.get("name").errors.required)}}function rt(t,e){1&t&&(u.Ub(0,"div"),u.Cc(1," Latitude is required. "),u.Tb())}function nt(t,e){if(1&t&&(u.Ub(0,"mat-error"),u.Bc(1,rt,2,0,"div",1),u.Tb()),2&t){const t=u.fc();u.Cb(1),u.lc("ngIf",null==t.form.get("lat").errors?null:t.form.get("lat").errors.required)}}function ot(t,e){1&t&&(u.Ub(0,"div"),u.Cc(1," Longitude is required. "),u.Tb())}function ct(t,e){if(1&t&&(u.Ub(0,"mat-error"),u.Bc(1,ot,2,0,"div",1),u.Tb()),2&t){const t=u.fc();u.Cb(1),u.lc("ngIf",null==t.form.get("lon").errors?null:t.form.get("lon").errors.required)}}function at(t,e){if(1&t&&(u.Ub(0,"mat-option",15),u.Cc(1),u.Tb()),2&t){const t=e.$implicit;u.lc("value",t.id),u.Cb(1),u.Ec(" ",t.name," ")}}function lt(t,e){1&t&&(u.Ub(0,"div"),u.Cc(1," Country is required. "),u.Tb())}function st(t,e){if(1&t&&(u.Ub(0,"mat-error"),u.Bc(1,lt,2,0,"div",1),u.Tb()),2&t){const t=u.fc();u.Cb(1),u.lc("ngIf",null==t.form.get("countryId").errors?null:t.form.get("countryId").errors.required)}}const ut=function(){return["../cities"]};let bt=(()=>{class t{constructor(t,e,i){this.activatedRoute=t,this.router=e,this.http=i}ngOnInit(){this.form=new K.g({name:new K.e("",[K.r.required]),lat:new K.e("",[K.r.required]),lon:new K.e("",[K.r.required]),countryId:new K.e("",[K.r.required])},null,this.isDupeCity()),this.loadData()}loadData(){this.loadCountries(),this.id=+this.activatedRoute.snapshot.paramMap.get("id"),this.id?this.http.get(`${o.a.apiUrl}/cities/${this.id}`).subscribe(t=>{this.city=t,this.title="Edit - "+this.city.name,this.form.patchValue(this.city)},console.error):this.title="Create a new City"}loadCountries(){var t=o.a.apiUrl+"/countries",e=(new c.c).set("pageSize","9999").set("sortColumn","name").set("sortOrder","asc");this.http.get(t,{params:e}).subscribe(t=>{this.countries=t.data},t=>console.error(t))}onSubmit2(){let t=this.form.value;console.info("c: ",t);let e=Object.assign(Object.assign({},this.city),t);console.log("model: ",e),console.info("this.city",this.city)}onSubmit(){var t=this.id?this.city:{};t.name=this.form.get("name").value,t.lat=this.form.get("lat").value,t.lon=this.form.get("lon").value,t.countryId=+this.form.get("countryId").value,this.id?this.http.put(o.a.apiUrl+"/cities/"+this.city.id,t).subscribe(e=>{console.log("City "+t.id+" has been updated."),this.router.navigate(["../cities"])},t=>console.log(t)):this.http.post(o.a.apiUrl+"/cities",t).subscribe(t=>{console.log("City "+t.id+" has been created."),this.router.navigate(["../cities"])},t=>console.log(t))}isDupeCity(){return t=>{var e={};return e.id=this.id?this.id:0,e.name=this.form.get("name").value,e.lat=this.form.get("lat").value,e.lon=this.form.get("lon").value,e.countryId=+this.form.get("countryId").value,this.http.post(o.a.apiUrl+"/cities/IsDupeCity",e).pipe(Object(W.a)(t=>t?{isDupeCity:!0}:null))}}}return t.\u0275fac=function(e){return new(e||t)(u.Ob(n.a),u.Ob(n.b),u.Ob(c.a))},t.\u0275cmp=u.Ib({type:t,selectors:[["app-cityedit"]],decls:28,vars:12,consts:[[1,"col-6"],[4,"ngIf"],[3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngIf"],[1,"col-12"],["matInput","","formControlName","name","placeholder","name"],["matInput","","formControlName","lat","placeholder","city latitude"],["matInput","","formControlName","lon","placeholder","city longitude"],["formControlName","countryId"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"my-2"],["type","submit","mat-raised-button","",1,"mx-1","btn","btn-success",3,"disabled"],["type","button","mat-raised-button","",1,"mx-1",3,"routerLink"],[1,"alert","alert-danger"],[3,"value"]],template:function(t,e){1&t&&(u.Ub(0,"div",0),u.Ub(1,"h1"),u.Cc(2),u.Tb(),u.Bc(3,Y,3,0,"p",1),u.Ub(4,"form",2),u.bc("ngSubmit",(function(){return e.onSubmit()})),u.Bc(5,tt,16,0,"div",3),u.Ub(6,"mat-form-field",4),u.Pb(7,"input",5),u.Bc(8,it,2,1,"mat-error",1),u.Tb(),u.Ub(9,"mat-form-field",4),u.Pb(10,"input",6),u.Bc(11,nt,2,1,"mat-error",1),u.Tb(),u.Ub(12,"mat-form-field",4),u.Pb(13,"input",7),u.Bc(14,ct,2,1,"mat-error",1),u.Tb(),u.Ub(15,"mat-form-field",4),u.Ub(16,"mat-label"),u.Cc(17,"Country:"),u.Tb(),u.Ub(18,"mat-select",8),u.Ub(19,"mat-option",9),u.Cc(20,"--- Select a country ---"),u.Tb(),u.Bc(21,at,2,2,"mat-option",10),u.Tb(),u.Bc(22,st,2,1,"mat-error",1),u.Tb(),u.Ub(23,"div",11),u.Ub(24,"button",12),u.Cc(25,"Save"),u.Tb(),u.Ub(26,"button",13),u.Cc(27,"Cancel"),u.Tb(),u.Tb(),u.Tb(),u.Tb()),2&t&&(u.Cb(2),u.Dc(e.title),u.Cb(1),u.lc("ngIf",e.id&&!e.city),u.Cb(1),u.lc("formGroup",e.form),u.Cb(1),u.lc("ngIf",e.form.invalid&&(null==e.form.errors?null:e.form.errors.isDupeCity)),u.Cb(3),u.lc("ngIf",e.form.get("name").invalid&&(e.form.get("name").dirty||e.form.get("name").touched)),u.Cb(3),u.lc("ngIf",e.form.get("lat").invalid&&(e.form.get("lat").dirty||e.form.get("lat").touched)),u.Cb(3),u.lc("ngIf",e.form.get("lon").invalid&&(e.form.get("lon").dirty||e.form.get("lon").touched)),u.Cb(7),u.lc("ngForOf",e.countries),u.Cb(1),u.lc("ngIf",e.form.get("countryId").invalid&&(e.form.get("countryId").dirty||e.form.get("countryId").touched)),u.Cb(2),u.lc("disabled",e.form.invalid),u.Cb(2),u.lc("routerLink",u.nc(11,ut)))},directives:[r.l,K.s,K.n,K.h,b.c,d.b,K.c,K.m,K.f,b.f,X.a,Z.n,r.k,P.b,n.c,b.b],styles:[""]}),t})();function dt(t,e){1&t&&(u.Ub(0,"p"),u.Ub(1,"em"),u.Cc(2,"Loading..."),u.Tb(),u.Tb())}function mt(t,e){1&t&&(u.Ub(0,"div"),u.Cc(1," Name is required. "),u.Tb())}function ft(t,e){1&t&&(u.Ub(0,"div"),u.Cc(1," Name already exists: please choose another. "),u.Tb())}function ht(t,e){if(1&t&&(u.Ub(0,"div",14),u.Bc(1,mt,2,0,"div",1),u.Bc(2,ft,2,0,"div",1),u.Tb()),2&t){const t=u.fc();u.Cb(1),u.lc("ngIf",null==t.form.get("name").errors?null:t.form.get("name").errors.required),u.Cb(1),u.lc("ngIf",null==t.form.get("name").errors?null:t.form.get("name").errors.isDupeField)}}function pt(t,e){1&t&&(u.Ub(0,"div"),u.Cc(1," ISO 3166-1 ALPHA-2 country code is required. "),u.Tb())}function gt(t,e){1&t&&(u.Ub(0,"div"),u.Cc(1," ISO 3166-1 ALPHA-2 country code requires 2 letters. "),u.Tb())}function Ct(t,e){1&t&&(u.Ub(0,"div"),u.Cc(1," This ISO 3166-1 ALPHA-2 country code already exist: please choose another. "),u.Tb())}function yt(t,e){if(1&t&&(u.Ub(0,"div",14),u.Bc(1,pt,2,0,"div",1),u.Bc(2,gt,2,0,"div",1),u.Bc(3,Ct,2,0,"div",1),u.Tb()),2&t){const t=u.fc();u.Cb(1),u.lc("ngIf",null==t.form.get("iso2").errors?null:t.form.get("iso2").errors.required),u.Cb(1),u.lc("ngIf",null==t.form.get("iso2").errors?null:t.form.get("iso2").errors.pattern),u.Cb(1),u.lc("ngIf",null==t.form.get("iso2").errors?null:t.form.get("iso2").errors.isDupeField)}}function vt(t,e){1&t&&(u.Ub(0,"div"),u.Cc(1," ISO 3166-1 ALPHA-3 country code is required. "),u.Tb())}function Ut(t,e){1&t&&(u.Ub(0,"div"),u.Cc(1," ISO 3166-1 ALPHA-3 country code requires 3 letters. "),u.Tb())}function Tt(t,e){1&t&&(u.Ub(0,"div"),u.Cc(1," This ISO 3166-1 ALPHA-3 country code already exist: please choose another. "),u.Tb())}function It(t,e){if(1&t&&(u.Ub(0,"div",14),u.Bc(1,vt,2,0,"div",1),u.Bc(2,Ut,2,0,"div",1),u.Bc(3,Tt,2,0,"div",1),u.Tb()),2&t){const t=u.fc();u.Cb(1),u.lc("ngIf",null==t.form.get("iso3").errors?null:t.form.get("iso3").errors.required),u.Cb(1),u.lc("ngIf",null==t.form.get("iso3").errors?null:t.form.get("iso3").errors.pattern),u.Cb(1),u.lc("ngIf",null==t.form.get("iso3").errors?null:t.form.get("iso3").errors.isDupeField)}}function St(t,e){if(1&t){const t=u.Vb();u.Ub(0,"button",15),u.bc("click",(function(){return u.tc(t),u.fc().onSubmit()})),u.Cc(1," Save "),u.Tb()}if(2&t){const t=u.fc();u.lc("disabled",t.form.invalid)}}function Dt(t,e){if(1&t){const t=u.Vb();u.Ub(0,"button",15),u.bc("click",(function(){return u.tc(t),u.fc().onSubmit()})),u.Cc(1," Create "),u.Tb()}if(2&t){const t=u.fc();u.lc("disabled",t.form.invalid)}}const wt=function(){return["/countries"]};let Bt=(()=>{class t{constructor(t,e,i,r){this.fb=t,this.activatedRoute=e,this.router=i,this.http=r}ngOnInit(){this.form=this.fb.group({name:["",K.r.required,this.isDupeField("name")],iso2:["",[K.r.required,K.r.pattern("[a-zA-Z]{2}")],this.isDupeField("iso2")],iso3:["",[K.r.required,K.r.pattern("[a-zA-Z]{3}")],this.isDupeField("iso3")]}),this.loadData()}loadData(){this.id=+this.activatedRoute.snapshot.paramMap.get("id"),this.id?this.http.get(o.a.apiUrl+"/countries/"+this.id).subscribe(t=>{this.country=t,this.title="Edit - "+this.country.name,this.form.patchValue(this.country)},t=>console.error(t)):this.title="Create a new Country"}onSubmit(){var t=this.id?this.country:{};t.name=this.form.get("name").value,t.iso2=this.form.get("iso2").value,t.iso3=this.form.get("iso3").value,this.id?this.http.put(o.a.apiUrl+"/countries/"+this.country.id,t).subscribe(e=>{console.log("Country "+t.id+" has been updated."),this.router.navigate(["/countries"])},t=>console.log(t)):this.http.post(o.a.apiUrl+"/countries",t).subscribe(t=>{console.log("Country "+t.id+" has been created."),this.router.navigate(["/countries"])},t=>console.log(t))}isDupeField(t){return e=>{var i=(new c.c).set("countryId",this.id?this.id.toString():"0").set("fieldName",t).set("fieldValue",e.value);return this.http.post(o.a.apiUrl+"/countries/IsDupeField",null,{params:i}).pipe(Object(W.a)(t=>t?{isDupeField:!0}:null))}}}return t.\u0275fac=function(e){return new(e||t)(u.Ob(K.d),u.Ob(n.a),u.Ob(n.b),u.Ob(c.a))},t.\u0275cmp=u.Ib({type:t,selectors:[["app-countryedit"]],decls:28,vars:10,consts:[[1,"country-edit"],[4,"ngIf"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name","required","","placeholder","Country name...",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["for","iso2"],["type","text","id","iso2","formControlName","iso2","required","","placeholder","2 letters country code...",1,"form-control"],["for","iso3"],["type","text","id","iso3","formControlName","iso3","required","","placeholder","3 letters country code...",1,"form-control"],[1,"form-group","commands"],["type","submit","class","btn btn-success",3,"disabled","click",4,"ngIf"],["type","submit",1,"btn","btn-default",3,"routerLink"],[1,"invalid-feedback"],["type","submit",1,"btn","btn-success",3,"disabled","click"]],template:function(t,e){1&t&&(u.Ub(0,"div",0),u.Ub(1,"h1"),u.Cc(2),u.Tb(),u.Bc(3,dt,3,0,"p",1),u.Ub(4,"div",2),u.bc("ngSubmit",(function(){return e.onSubmit()})),u.Ub(5,"div",3),u.Ub(6,"label",4),u.Cc(7,"Country name:"),u.Tb(),u.Pb(8,"br"),u.Pb(9,"input",5),u.Bc(10,ht,3,2,"div",6),u.Tb(),u.Ub(11,"div",3),u.Ub(12,"label",7),u.Cc(13,"ISO 3166-1 ALPHA-2 Country Code (2 letters)"),u.Tb(),u.Pb(14,"br"),u.Pb(15,"input",8),u.Bc(16,yt,4,3,"div",6),u.Tb(),u.Ub(17,"div",3),u.Ub(18,"label",9),u.Cc(19,"ISO 3166-1 ALPHA-3 Country Code (3 letters)"),u.Tb(),u.Pb(20,"br"),u.Pb(21,"input",10),u.Bc(22,It,4,3,"div",6),u.Tb(),u.Ub(23,"div",11),u.Bc(24,St,2,1,"button",12),u.Bc(25,Dt,2,1,"button",12),u.Ub(26,"button",13),u.Cc(27," Cancel "),u.Tb(),u.Tb(),u.Tb(),u.Tb()),2&t&&(u.Cb(2),u.Dc(e.title),u.Cb(1),u.lc("ngIf",e.id&&!e.country),u.Cb(1),u.lc("formGroup",e.form),u.Cb(6),u.lc("ngIf",e.form.get("name").invalid&&(e.form.get("name").dirty||e.form.get("name").touched)),u.Cb(6),u.lc("ngIf",e.form.get("iso2").invalid&&(e.form.get("iso2").dirty||e.form.get("iso2").touched)),u.Cb(6),u.lc("ngIf",e.form.get("iso3").invalid&&(e.form.get("iso3").dirty||e.form.get("iso3").touched)),u.Cb(2),u.lc("ngIf",e.id),u.Cb(1),u.lc("ngIf",!e.id),u.Cb(1),u.lc("routerLink",u.nc(9,wt)))},directives:[r.l,K.n,K.h,K.c,K.m,K.f,K.q,n.c],styles:["input.ng-valid[_ngcontent-%COMP%]{border-left:5px solid green}input.ng-invalid.ng-dirty[_ngcontent-%COMP%], input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-left:5px solid red}input.ng-invalid[_ngcontent-%COMP%] ~ .invalid-feedback[_ngcontent-%COMP%], input.ng-valid[_ngcontent-%COMP%] ~ .valid-feedback[_ngcontent-%COMP%]{display:block}"]}),t})();const Ot=[{path:"",component:q,children:[{path:"cities",component:O},{path:"city/:id",component:bt},{path:"city",component:bt},{path:"countries",component:J},{path:"country/:id",component:Bt},{path:"country",component:Bt}]}];let Pt=(()=>{class t{}return t.\u0275mod=u.Mb({type:t}),t.\u0275inj=u.Lb({factory:function(e){return new(e||t)},imports:[[n.f.forChild(Ot)],n.f]}),t})();var kt=i("hctd");let Lt=(()=>{class t{}return t.\u0275mod=u.Mb({type:t}),t.\u0275inj=u.Lb({factory:function(e){return new(e||t)},imports:[[r.c,kt.a,K.p,Pt]]}),t})()}}]);