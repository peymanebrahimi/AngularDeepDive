(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{zRUs:function(t,e,i){"use strict";i.r(e),i.d(e,"WorldcityModule",function(){return Lt});var o=i("ofXK"),r=i("tyNb"),n=i("AytR"),c=i("tk/3"),a=i("+0xr"),s=i("M9IT"),l=i("Dh3D"),u=i("fXoL"),b=i("kmnG"),d=i("qFsG");function m(t,e){1&t&&(u.Wb(0,"p"),u.Wb(1,"em"),u.Ec(2,"Loading..."),u.Vb(),u.Vb())}const f=function(){return["../city"]};function h(t,e){1&t&&(u.Wb(0,"div",14),u.Wb(1,"button",15),u.Ec(2," Add a new City "),u.Vb(),u.Vb()),2&t&&(u.Eb(1),u.oc("routerLink",u.qc(1,f)))}function p(t,e){1&t&&(u.Wb(0,"mat-header-cell",16),u.Ec(1,"ID"),u.Vb())}function g(t,e){if(1&t&&(u.Wb(0,"mat-cell"),u.Ec(1),u.Vb()),2&t){const t=e.$implicit;u.Eb(1),u.Fc(t.id)}}function y(t,e){1&t&&(u.Wb(0,"mat-header-cell",16),u.Ec(1,"Name"),u.Vb())}const C=function(t){return["../city",t]};function v(t,e){if(1&t&&(u.Wb(0,"mat-cell"),u.Wb(1,"a",17),u.Ec(2),u.Vb(),u.Vb()),2&t){const t=e.$implicit;u.Eb(1),u.oc("routerLink",u.rc(2,C,t.id)),u.Eb(1),u.Fc(t.name)}}function E(t,e){1&t&&(u.Wb(0,"mat-header-cell",16),u.Ec(1,"Latitude"),u.Vb())}function V(t,e){if(1&t&&(u.Wb(0,"mat-cell"),u.Ec(1),u.Vb()),2&t){const t=e.$implicit;u.Eb(1),u.Fc(t.lat)}}function W(t,e){1&t&&(u.Wb(0,"mat-header-cell",16),u.Ec(1,"Longitude"),u.Vb())}function I(t,e){if(1&t&&(u.Wb(0,"mat-cell"),u.Ec(1),u.Vb()),2&t){const t=e.$implicit;u.Eb(1),u.Fc(t.lon)}}function S(t,e){1&t&&u.Rb(0,"mat-header-row")}function D(t,e){1&t&&u.Rb(0,"mat-row")}const w=function(){return[10,20,50]};let O=(()=>{class t{constructor(t){this.http=t,this.url=`${n.a.serverUrl}/api/cities`,this.defaultPageIndex=0,this.defaultPageSize=10,this.defaultSortColumn="name",this.defaultSortOrder="asc",this.defaultFilterColumn="name",this.filterQuery=null,this.cities=new a.o,this.displayedColumns=["id","name","lat","lon"]}ngOnInit(){this.loadData()}loadData(t=null){let e=new s.c;e.pageIndex=this.defaultPageIndex,e.pageSize=this.defaultPageSize,t&&(this.filterQuery=t.target.value),this.getData(e)}getData(t){let e=(new c.d).set("pageIndex",t.pageIndex.toString()).set("pageSize",t.pageSize.toString()).set("sortColumn",this.sort?this.sort.active:this.defaultSortColumn).set("sortOrder",this.sort?this.sort.direction:this.defaultSortOrder);this.filterQuery&&(e=e.set("filterColumn",this.defaultFilterColumn).set("filterQuery",this.filterQuery)),this.http.get(this.url,{params:e}).subscribe(t=>{this.paginator.length=t.totalCount,this.cities.data=t.data},t=>console.error(t))}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(c.b))},t.\u0275cmp=u.Kb({type:t,selectors:[["app-cities"]],viewQuery:function(t,e){if(1&t&&(u.Ic(s.a,3),u.Ic(l.a,1)),2&t){let t;u.tc(t=u.fc())&&(e.paginator=t.first),u.tc(t=u.fc())&&(e.sort=t.first)}},decls:22,vars:12,consts:[[4,"ngIf"],["class","commands text-right",4,"ngIf"],[3,"hidden"],["matInput","","placeholder","Filter by name (or part of it)...",3,"keyup"],["matSort","",1,"mat-elevation-z8",3,"dataSource","hidden","matSortActive","matSortDirection","matSortChange"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","lat"],["matColumnDef","lon"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSize","pageSizeOptions","page"],[1,"commands","text-right"],["type","button",1,"btn","btn-success",3,"routerLink"],["mat-sort-header",""],[3,"routerLink"]],template:function(t,e){1&t&&(u.Wb(0,"p"),u.Ec(1,"Here's a list of cities: feel free to play with it."),u.Vb(),u.Cc(2,m,3,0,"p",0),u.Cc(3,h,3,2,"div",1),u.Wb(4,"mat-form-field",2),u.Wb(5,"input",3),u.ec("keyup",function(t){return e.loadData(t)}),u.Vb(),u.Vb(),u.Wb(6,"mat-table",4),u.ec("matSortChange",function(){return e.loadData()}),u.Ub(7,5),u.Cc(8,p,2,0,"mat-header-cell",6),u.Cc(9,g,2,1,"mat-cell",7),u.Tb(),u.Ub(10,8),u.Cc(11,y,2,0,"mat-header-cell",6),u.Cc(12,v,3,4,"mat-cell",7),u.Tb(),u.Ub(13,9),u.Cc(14,E,2,0,"mat-header-cell",6),u.Cc(15,V,2,1,"mat-cell",7),u.Tb(),u.Ub(16,10),u.Cc(17,W,2,0,"mat-header-cell",6),u.Cc(18,I,2,1,"mat-cell",7),u.Tb(),u.Cc(19,S,1,0,"mat-header-row",11),u.Cc(20,D,1,0,"mat-row",12),u.Vb(),u.Wb(21,"mat-paginator",13),u.ec("page",function(t){return e.getData(t)}),u.Vb()),2&t&&(u.Eb(2),u.oc("ngIf",!e.cities),u.Eb(1),u.oc("ngIf",e.cities),u.Eb(1),u.oc("hidden",!e.cities),u.Eb(2),u.oc("dataSource",e.cities)("hidden",!e.cities)("matSortActive",e.defaultSortColumn)("matSortDirection",e.defaultSortOrder),u.Eb(13),u.oc("matHeaderRowDef",e.displayedColumns),u.Eb(1),u.oc("matRowDefColumns",e.displayedColumns),u.Eb(1),u.oc("pageSize",10)("pageSizeOptions",u.qc(11,w)))},directives:[o.n,b.c,d.b,a.n,l.a,a.c,a.i,a.b,a.k,a.m,s.a,r.g,a.h,l.b,a.a,r.i,a.j,a.l],styles:[""]}),t})();var k=i("bTqV");const q=function(){return["cities"]},L=function(){return["countries"]};let R=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u.Kb({type:t,selectors:[["app-worldhome"]],decls:8,vars:4,consts:[[1,"mb-3"],["mat-raised-button","","color","primary","routerLinkActive","router-link-active",1,"mx-2",3,"routerLink"]],template:function(t,e){1&t&&(u.Wb(0,"p"),u.Ec(1,"WorldCity Home"),u.Vb(),u.Wb(2,"nav",0),u.Wb(3,"a",1),u.Ec(4,"Cities"),u.Vb(),u.Wb(5,"a",1),u.Ec(6,"Countries"),u.Vb(),u.Vb(),u.Rb(7,"router-outlet")),2&t&&(u.Eb(3),u.oc("routerLink",u.qc(2,q)),u.Eb(2),u.oc("routerLink",u.qc(3,L)))},directives:[k.a,r.i,r.h,r.k],styles:[""]}),t})();function F(t,e){1&t&&(u.Wb(0,"p"),u.Wb(1,"em"),u.Ec(2,"Loading..."),u.Vb(),u.Vb())}const x=function(){return["../country"]};function A(t,e){1&t&&(u.Wb(0,"div",14),u.Wb(1,"button",15),u.Ec(2," Add a new Country "),u.Vb(),u.Vb()),2&t&&(u.Eb(1),u.oc("routerLink",u.qc(1,x)))}function z(t,e){1&t&&(u.Wb(0,"mat-header-cell",16),u.Ec(1,"ID"),u.Vb())}function P(t,e){if(1&t&&(u.Wb(0,"mat-cell"),u.Ec(1),u.Vb()),2&t){const t=e.$implicit;u.Eb(1),u.Fc(t.id)}}function Q(t,e){1&t&&(u.Wb(0,"mat-header-cell",16),u.Ec(1,"Name"),u.Vb())}const U=function(t){return["../country",t]};function H(t,e){if(1&t&&(u.Wb(0,"mat-cell"),u.Wb(1,"a",17),u.Ec(2),u.Vb(),u.Vb()),2&t){const t=e.$implicit;u.Eb(1),u.oc("routerLink",u.rc(2,U,t.id)),u.Eb(1),u.Fc(t.name)}}function N(t,e){1&t&&(u.Wb(0,"mat-header-cell",16),u.Ec(1,"ISO2"),u.Vb())}function $(t,e){if(1&t&&(u.Wb(0,"mat-cell"),u.Ec(1),u.Vb()),2&t){const t=e.$implicit;u.Eb(1),u.Fc(t.iso2)}}function M(t,e){1&t&&(u.Wb(0,"mat-header-cell",16),u.Ec(1,"ISO3"),u.Vb())}function T(t,e){if(1&t&&(u.Wb(0,"mat-cell"),u.Ec(1),u.Vb()),2&t){const t=e.$implicit;u.Eb(1),u.Fc(t.iso3)}}function j(t,e){1&t&&u.Rb(0,"mat-header-row")}function G(t,e){1&t&&u.Rb(0,"mat-row")}const K=function(){return[10,20,50]};let _=(()=>{class t{constructor(t){this.http=t,this.url=`${n.a.serverUrl}/api/countries`,this.defaultPageIndex=0,this.defaultPageSize=10,this.defaultSortColumn="name",this.defaultSortOrder="asc",this.defaultFilterColumn="name",this.filterQuery=null,this.countries=new a.o,this.displayedColumns=["id","name","iso2","iso3"]}ngOnInit(){this.loadData()}loadData(t=null){let e=new s.c;e.pageIndex=this.defaultPageIndex,e.pageSize=this.defaultPageSize,null!=t&&(this.filterQuery=t.target.value),this.getData(e)}getData(t){let e=(new c.d).set("pageIndex",t.pageIndex.toString()).set("pageSize",t.pageSize.toString()).set("sortColumn",this.sort?this.sort.active:this.defaultSortColumn).set("sortOrder",this.sort?this.sort.direction:this.defaultSortOrder);this.filterQuery&&(e=e.set("filterColumn",this.defaultFilterColumn).set("filterQuery",this.filterQuery)),this.http.get(this.url,{params:e}).subscribe(t=>{this.paginator.length=t.totalCount,this.countries.data=t.data},t=>console.error(t))}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(c.b))},t.\u0275cmp=u.Kb({type:t,selectors:[["app-countries"]],viewQuery:function(t,e){if(1&t&&(u.Ic(s.a,3),u.Ic(l.a,1)),2&t){let t;u.tc(t=u.fc())&&(e.paginator=t.first),u.tc(t=u.fc())&&(e.sort=t.first)}},decls:22,vars:12,consts:[[4,"ngIf"],["class","commands text-right",4,"ngIf"],[3,"hidden"],["matInput","","placeholder","Filter by name (or part of it)...",3,"keyup"],["matSort","",1,"mat-elevation-z8",3,"dataSource","hidden","matSortActive","matSortDirection","matSortChange"],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","iso2"],["matColumnDef","iso3"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSize","pageSizeOptions","page"],[1,"commands","text-right"],["type","button",1,"btn","btn-success",3,"routerLink"],["mat-sort-header",""],[3,"routerLink"]],template:function(t,e){1&t&&(u.Wb(0,"p"),u.Ec(1,"Here's a list of countries: feel free to play with it."),u.Vb(),u.Cc(2,F,3,0,"p",0),u.Cc(3,A,3,2,"div",1),u.Wb(4,"mat-form-field",2),u.Wb(5,"input",3),u.ec("keyup",function(t){return e.loadData(t)}),u.Vb(),u.Vb(),u.Wb(6,"mat-table",4),u.ec("matSortChange",function(){return e.loadData()}),u.Ub(7,5),u.Cc(8,z,2,0,"mat-header-cell",6),u.Cc(9,P,2,1,"mat-cell",7),u.Tb(),u.Ub(10,8),u.Cc(11,Q,2,0,"mat-header-cell",6),u.Cc(12,H,3,4,"mat-cell",7),u.Tb(),u.Ub(13,9),u.Cc(14,N,2,0,"mat-header-cell",6),u.Cc(15,$,2,1,"mat-cell",7),u.Tb(),u.Ub(16,10),u.Cc(17,M,2,0,"mat-header-cell",6),u.Cc(18,T,2,1,"mat-cell",7),u.Tb(),u.Cc(19,j,1,0,"mat-header-row",11),u.Cc(20,G,1,0,"mat-row",12),u.Vb(),u.Wb(21,"mat-paginator",13),u.ec("page",function(t){return e.getData(t)}),u.Vb()),2&t&&(u.Eb(2),u.oc("ngIf",!e.countries),u.Eb(1),u.oc("ngIf",e.countries),u.Eb(1),u.oc("hidden",!e.countries),u.Eb(2),u.oc("dataSource",e.countries)("hidden",!e.countries)("matSortActive",e.defaultSortColumn)("matSortDirection",e.defaultSortOrder),u.Eb(13),u.oc("matHeaderRowDef",e.displayedColumns),u.Eb(1),u.oc("matRowDefColumns",e.displayedColumns),u.Eb(1),u.oc("pageSize",10)("pageSizeOptions",u.qc(11,K)))},directives:[o.n,b.c,d.b,a.n,l.a,a.c,a.i,a.b,a.k,a.m,s.a,r.g,a.h,l.b,a.a,r.i,a.j,a.l],styles:[""]}),t})();var X=i("3Pt+"),J=i("lJxs"),B=i("d3UM"),Z=i("FKr1");function Y(t,e){1&t&&(u.Wb(0,"p"),u.Wb(1,"em"),u.Ec(2,"loading ..."),u.Vb(),u.Vb())}function tt(t,e){1&t&&(u.Wb(0,"div",14),u.Wb(1,"strong"),u.Ec(2,"ERROR"),u.Vb(),u.Ec(3,": A city with the same "),u.Wb(4,"i"),u.Ec(5,"name"),u.Vb(),u.Ec(6,", "),u.Wb(7,"i"),u.Ec(8,"lat"),u.Vb(),u.Ec(9,", "),u.Wb(10,"i"),u.Ec(11,"lon"),u.Vb(),u.Ec(12," and "),u.Wb(13,"i"),u.Ec(14,"country"),u.Vb(),u.Ec(15," already exists. "),u.Vb())}function et(t,e){1&t&&(u.Wb(0,"div"),u.Ec(1," Name is required. "),u.Vb())}function it(t,e){if(1&t&&(u.Wb(0,"mat-error"),u.Cc(1,et,2,0,"div",1),u.Vb()),2&t){const t=u.ic();u.Eb(1),u.oc("ngIf",null==t.form.get("name").errors?null:t.form.get("name").errors.required)}}function ot(t,e){1&t&&(u.Wb(0,"div"),u.Ec(1," Latitude is required. "),u.Vb())}function rt(t,e){if(1&t&&(u.Wb(0,"mat-error"),u.Cc(1,ot,2,0,"div",1),u.Vb()),2&t){const t=u.ic();u.Eb(1),u.oc("ngIf",null==t.form.get("lat").errors?null:t.form.get("lat").errors.required)}}function nt(t,e){1&t&&(u.Wb(0,"div"),u.Ec(1," Longitude is required. "),u.Vb())}function ct(t,e){if(1&t&&(u.Wb(0,"mat-error"),u.Cc(1,nt,2,0,"div",1),u.Vb()),2&t){const t=u.ic();u.Eb(1),u.oc("ngIf",null==t.form.get("lon").errors?null:t.form.get("lon").errors.required)}}function at(t,e){if(1&t&&(u.Wb(0,"mat-option",15),u.Ec(1),u.Vb()),2&t){const t=e.$implicit;u.oc("value",t.id),u.Eb(1),u.Gc(" ",t.name," ")}}function st(t,e){1&t&&(u.Wb(0,"div"),u.Ec(1," Country is required. "),u.Vb())}function lt(t,e){if(1&t&&(u.Wb(0,"mat-error"),u.Cc(1,st,2,0,"div",1),u.Vb()),2&t){const t=u.ic();u.Eb(1),u.oc("ngIf",null==t.form.get("countryId").errors?null:t.form.get("countryId").errors.required)}}const ut=function(){return["../cities"]};let bt=(()=>{class t{constructor(t,e,i){this.activatedRoute=t,this.router=e,this.http=i,this.form=new X.g({name:new X.e("",[X.s.required]),lat:new X.e("",[X.s.required]),lon:new X.e("",[X.s.required]),countryId:new X.e("",[X.s.required])},null,this.isDupeCity())}ngOnInit(){this.loadData()}loadData(){this.loadCountries(),this.id=+this.activatedRoute.snapshot.paramMap.get("id"),this.id?this.http.get(`${n.a.serverUrl}/api/cities/${this.id}`).subscribe(t=>{this.city=t,this.title=`Edit - ${this.city.name}`,this.form.patchValue(this.city)},console.error):this.title="Create a new City"}loadCountries(){var t=n.a.serverUrl+"/api/countries",e=(new c.d).set("pageSize","9999").set("sortColumn","name").set("sortOrder","asc");this.http.get(t,{params:e}).subscribe(t=>{this.countries=t.data},t=>console.error(t))}onSubmit2(){let t=this.form.value;console.info("c: ",t);let e=Object.assign(Object.assign({},this.city),t);console.log("model: ",e),console.info("this.city",this.city)}onSubmit(){const t=this.id?this.city:{};t.name=this.form.get("name").value,t.lat=this.form.get("lat").value,t.lon=this.form.get("lon").value,t.countryId=+this.form.get("countryId").value,this.id?this.http.put(n.a.serverUrl+"/api/cities/"+this.city.id,t).subscribe(e=>{console.log("City "+t.id+" has been updated."),this.router.navigate(["../cities"])},t=>console.log(t)):this.http.post(n.a.serverUrl+"/api/cities",t).subscribe(t=>{console.log("City "+t.id+" has been created."),this.router.navigate(["../cities"])},t=>console.log(t))}isDupeCity(){return t=>{var e={};return e.id=this.id?this.id:0,e.name=this.form.get("name").value,e.lat=this.form.get("lat").value,e.lon=this.form.get("lon").value,e.countryId=+this.form.get("countryId").value,this.http.post(n.a.serverUrl+"/api/cities/IsDupeCity",e).pipe(Object(J.a)(t=>t?{isDupeCity:!0}:null))}}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(r.a),u.Qb(r.f),u.Qb(c.b))},t.\u0275cmp=u.Kb({type:t,selectors:[["app-cityedit"]],decls:28,vars:12,consts:[[1,"col-6"],[4,"ngIf"],[3,"formGroup","ngSubmit"],["class","alert alert-danger",4,"ngIf"],[1,"col-12"],["matInput","","formControlName","name","placeholder","name"],["matInput","","formControlName","lat","placeholder","city latitude"],["matInput","","formControlName","lon","placeholder","city longitude"],["formControlName","countryId"],["value",""],[3,"value",4,"ngFor","ngForOf"],[1,"my-2"],["type","submit","mat-raised-button","",1,"mx-1","btn","btn-success",3,"disabled"],["type","button","mat-raised-button","",1,"mx-1",3,"routerLink"],[1,"alert","alert-danger"],[3,"value"]],template:function(t,e){1&t&&(u.Wb(0,"div",0),u.Wb(1,"h1"),u.Ec(2),u.Vb(),u.Cc(3,Y,3,0,"p",1),u.Wb(4,"form",2),u.ec("ngSubmit",function(){return e.onSubmit()}),u.Cc(5,tt,16,0,"div",3),u.Wb(6,"mat-form-field",4),u.Rb(7,"input",5),u.Cc(8,it,2,1,"mat-error",1),u.Vb(),u.Wb(9,"mat-form-field",4),u.Rb(10,"input",6),u.Cc(11,rt,2,1,"mat-error",1),u.Vb(),u.Wb(12,"mat-form-field",4),u.Rb(13,"input",7),u.Cc(14,ct,2,1,"mat-error",1),u.Vb(),u.Wb(15,"mat-form-field",4),u.Wb(16,"mat-label"),u.Ec(17,"Country:"),u.Vb(),u.Wb(18,"mat-select",8),u.Wb(19,"mat-option",9),u.Ec(20,"--- Select a country ---"),u.Vb(),u.Cc(21,at,2,2,"mat-option",10),u.Vb(),u.Cc(22,lt,2,1,"mat-error",1),u.Vb(),u.Wb(23,"div",11),u.Wb(24,"button",12),u.Ec(25,"Save"),u.Vb(),u.Wb(26,"button",13),u.Ec(27,"Cancel"),u.Vb(),u.Vb(),u.Vb(),u.Vb()),2&t&&(u.Eb(2),u.Fc(e.title),u.Eb(1),u.oc("ngIf",e.id&&!e.city),u.Eb(1),u.oc("formGroup",e.form),u.Eb(1),u.oc("ngIf",e.form.invalid&&(null==e.form.errors?null:e.form.errors.isDupeCity)),u.Eb(3),u.oc("ngIf",e.form.get("name").invalid&&(e.form.get("name").dirty||e.form.get("name").touched)),u.Eb(3),u.oc("ngIf",e.form.get("lat").invalid&&(e.form.get("lat").dirty||e.form.get("lat").touched)),u.Eb(3),u.oc("ngIf",e.form.get("lon").invalid&&(e.form.get("lon").dirty||e.form.get("lon").touched)),u.Eb(7),u.oc("ngForOf",e.countries),u.Eb(1),u.oc("ngIf",e.form.get("countryId").invalid&&(e.form.get("countryId").dirty||e.form.get("countryId").touched)),u.Eb(2),u.oc("disabled",e.form.invalid),u.Eb(2),u.oc("routerLink",u.qc(11,ut)))},directives:[o.n,X.t,X.n,X.h,b.c,d.b,X.c,X.m,X.f,b.f,B.a,Z.m,o.m,k.b,r.g,b.b],styles:[""]}),t})();function dt(t,e){1&t&&(u.Wb(0,"p"),u.Wb(1,"em"),u.Ec(2,"Loading..."),u.Vb(),u.Vb())}function mt(t,e){1&t&&(u.Wb(0,"div"),u.Ec(1," Name is required. "),u.Vb())}function ft(t,e){1&t&&(u.Wb(0,"div"),u.Ec(1," Name already exists: please choose another. "),u.Vb())}function ht(t,e){if(1&t&&(u.Wb(0,"div",14),u.Cc(1,mt,2,0,"div",1),u.Cc(2,ft,2,0,"div",1),u.Vb()),2&t){const t=u.ic();u.Eb(1),u.oc("ngIf",null==t.form.get("name").errors?null:t.form.get("name").errors.required),u.Eb(1),u.oc("ngIf",null==t.form.get("name").errors?null:t.form.get("name").errors.isDupeField)}}function pt(t,e){1&t&&(u.Wb(0,"div"),u.Ec(1," ISO 3166-1 ALPHA-2 country code is required. "),u.Vb())}function gt(t,e){1&t&&(u.Wb(0,"div"),u.Ec(1," ISO 3166-1 ALPHA-2 country code requires 2 letters. "),u.Vb())}function yt(t,e){1&t&&(u.Wb(0,"div"),u.Ec(1," This ISO 3166-1 ALPHA-2 country code already exist: please choose another. "),u.Vb())}function Ct(t,e){if(1&t&&(u.Wb(0,"div",14),u.Cc(1,pt,2,0,"div",1),u.Cc(2,gt,2,0,"div",1),u.Cc(3,yt,2,0,"div",1),u.Vb()),2&t){const t=u.ic();u.Eb(1),u.oc("ngIf",null==t.form.get("iso2").errors?null:t.form.get("iso2").errors.required),u.Eb(1),u.oc("ngIf",null==t.form.get("iso2").errors?null:t.form.get("iso2").errors.pattern),u.Eb(1),u.oc("ngIf",null==t.form.get("iso2").errors?null:t.form.get("iso2").errors.isDupeField)}}function vt(t,e){1&t&&(u.Wb(0,"div"),u.Ec(1," ISO 3166-1 ALPHA-3 country code is required. "),u.Vb())}function Et(t,e){1&t&&(u.Wb(0,"div"),u.Ec(1," ISO 3166-1 ALPHA-3 country code requires 3 letters. "),u.Vb())}function Vt(t,e){1&t&&(u.Wb(0,"div"),u.Ec(1," This ISO 3166-1 ALPHA-3 country code already exist: please choose another. "),u.Vb())}function Wt(t,e){if(1&t&&(u.Wb(0,"div",14),u.Cc(1,vt,2,0,"div",1),u.Cc(2,Et,2,0,"div",1),u.Cc(3,Vt,2,0,"div",1),u.Vb()),2&t){const t=u.ic();u.Eb(1),u.oc("ngIf",null==t.form.get("iso3").errors?null:t.form.get("iso3").errors.required),u.Eb(1),u.oc("ngIf",null==t.form.get("iso3").errors?null:t.form.get("iso3").errors.pattern),u.Eb(1),u.oc("ngIf",null==t.form.get("iso3").errors?null:t.form.get("iso3").errors.isDupeField)}}function It(t,e){if(1&t){const t=u.Xb();u.Wb(0,"button",15),u.ec("click",function(){return u.wc(t),u.ic().onSubmit()}),u.Ec(1," Save "),u.Vb()}if(2&t){const t=u.ic();u.oc("disabled",t.form.invalid)}}function St(t,e){if(1&t){const t=u.Xb();u.Wb(0,"button",15),u.ec("click",function(){return u.wc(t),u.ic().onSubmit()}),u.Ec(1," Create "),u.Vb()}if(2&t){const t=u.ic();u.oc("disabled",t.form.invalid)}}const Dt=function(){return["/countries"]};let wt=(()=>{class t{constructor(t,e,i,o){this.fb=t,this.activatedRoute=e,this.router=i,this.http=o,this.form=this.fb.group({name:["",X.s.required,this.isDupeField("name")],iso2:["",[X.s.required,X.s.pattern("[a-zA-Z]{2}")],this.isDupeField("iso2")],iso3:["",[X.s.required,X.s.pattern("[a-zA-Z]{3}")],this.isDupeField("iso3")]})}ngOnInit(){this.loadData()}loadData(){this.id=+this.activatedRoute.snapshot.paramMap.get("id"),this.id?this.http.get(n.a.serverUrl+"/api/countries/"+this.id).subscribe(t=>{this.country=t,this.title="Edit - "+this.country.name,this.form.patchValue(this.country)},t=>console.error(t)):this.title="Create a new Country"}onSubmit(){var t=this.id?this.country:{};t.name=this.form.get("name").value,t.iso2=this.form.get("iso2").value,t.iso3=this.form.get("iso3").value,this.id?this.http.put(n.a.serverUrl+"/api/countries/"+this.country.id,t).subscribe(e=>{console.log("Country "+t.id+" has been updated."),this.router.navigate(["/countries"])},t=>console.log(t)):this.http.post(n.a.serverUrl+"/api/countries",t).subscribe(t=>{console.log("Country "+t.id+" has been created."),this.router.navigate(["/countries"])},t=>console.log(t))}isDupeField(t){return e=>{var i=(new c.d).set("countryId",this.id?this.id.toString():"0").set("fieldName",t).set("fieldValue",e.value);return this.http.post(n.a.serverUrl+"/api/countries/IsDupeField",null,{params:i}).pipe(Object(J.a)(t=>t?{isDupeField:!0}:null))}}}return t.\u0275fac=function(e){return new(e||t)(u.Qb(X.d),u.Qb(r.a),u.Qb(r.f),u.Qb(c.b))},t.\u0275cmp=u.Kb({type:t,selectors:[["app-countryedit"]],decls:28,vars:10,consts:[[1,"country-edit"],[4,"ngIf"],[1,"form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name","required","","placeholder","Country name...",1,"form-control"],["class","invalid-feedback",4,"ngIf"],["for","iso2"],["type","text","id","iso2","formControlName","iso2","required","","placeholder","2 letters country code...",1,"form-control"],["for","iso3"],["type","text","id","iso3","formControlName","iso3","required","","placeholder","3 letters country code...",1,"form-control"],[1,"form-group","commands"],["type","submit","class","btn btn-success",3,"disabled","click",4,"ngIf"],["type","submit",1,"btn","btn-default",3,"routerLink"],[1,"invalid-feedback"],["type","submit",1,"btn","btn-success",3,"disabled","click"]],template:function(t,e){1&t&&(u.Wb(0,"div",0),u.Wb(1,"h1"),u.Ec(2),u.Vb(),u.Cc(3,dt,3,0,"p",1),u.Wb(4,"div",2),u.ec("ngSubmit",function(){return e.onSubmit()}),u.Wb(5,"div",3),u.Wb(6,"label",4),u.Ec(7,"Country name:"),u.Vb(),u.Rb(8,"br"),u.Rb(9,"input",5),u.Cc(10,ht,3,2,"div",6),u.Vb(),u.Wb(11,"div",3),u.Wb(12,"label",7),u.Ec(13,"ISO 3166-1 ALPHA-2 Country Code (2 letters)"),u.Vb(),u.Rb(14,"br"),u.Rb(15,"input",8),u.Cc(16,Ct,4,3,"div",6),u.Vb(),u.Wb(17,"div",3),u.Wb(18,"label",9),u.Ec(19,"ISO 3166-1 ALPHA-3 Country Code (3 letters)"),u.Vb(),u.Rb(20,"br"),u.Rb(21,"input",10),u.Cc(22,Wt,4,3,"div",6),u.Vb(),u.Wb(23,"div",11),u.Cc(24,It,2,1,"button",12),u.Cc(25,St,2,1,"button",12),u.Wb(26,"button",13),u.Ec(27," Cancel "),u.Vb(),u.Vb(),u.Vb(),u.Vb()),2&t&&(u.Eb(2),u.Fc(e.title),u.Eb(1),u.oc("ngIf",e.id&&!e.country),u.Eb(1),u.oc("formGroup",e.form),u.Eb(6),u.oc("ngIf",e.form.get("name").invalid&&(e.form.get("name").dirty||e.form.get("name").touched)),u.Eb(6),u.oc("ngIf",e.form.get("iso2").invalid&&(e.form.get("iso2").dirty||e.form.get("iso2").touched)),u.Eb(6),u.oc("ngIf",e.form.get("iso3").invalid&&(e.form.get("iso3").dirty||e.form.get("iso3").touched)),u.Eb(2),u.oc("ngIf",e.id),u.Eb(1),u.oc("ngIf",!e.id),u.Eb(1),u.oc("routerLink",u.qc(9,Dt)))},directives:[o.n,X.n,X.h,X.c,X.m,X.f,X.r,r.g],styles:["input.ng-valid[_ngcontent-%COMP%]{border-left:5px solid green}input.ng-invalid.ng-dirty[_ngcontent-%COMP%], input.ng-invalid.ng-touched[_ngcontent-%COMP%]{border-left:5px solid red}input.ng-invalid[_ngcontent-%COMP%] ~ .invalid-feedback[_ngcontent-%COMP%], input.ng-valid[_ngcontent-%COMP%] ~ .valid-feedback[_ngcontent-%COMP%]{display:block}"]}),t})();const Ot=[{path:"",component:R,children:[{path:"cities",component:O},{path:"city/:id",component:bt},{path:"city",component:bt},{path:"countries",component:_},{path:"country/:id",component:wt},{path:"country",component:wt}]}];let kt=(()=>{class t{}return t.\u0275mod=u.Ob({type:t}),t.\u0275inj=u.Nb({factory:function(e){return new(e||t)},imports:[[r.j.forChild(Ot)],r.j]}),t})();var qt=i("hctd");let Lt=(()=>{class t{}return t.\u0275mod=u.Ob({type:t}),t.\u0275inj=u.Nb({factory:function(e){return new(e||t)},imports:[[o.c,qt.a,X.q,kt]]}),t})()}}]);