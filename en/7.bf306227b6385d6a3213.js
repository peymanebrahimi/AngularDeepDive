(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9hXf":function(t,e,n){"use strict";n.r(e),n.d(e,"SignalrnewsModule",(function(){return gt}));var s=n("ofXK"),i=n("tyNb"),o=n("l7P3");const c=Object(o.g)("[news] JOIN_GROUP",Object(o.l)()),r=Object(o.g)("[news] JOIN_GROUP_Complete",Object(o.l)()),u=Object(o.g)("[news] RECEIVED_GROUP_JOIN",Object(o.l)()),a=Object(o.g)("[news] LEAVE_GROUP",Object(o.l)()),b=Object(o.g)("[news] LEAVE_GROUP_Complete",Object(o.l)()),l=Object(o.g)("[news] RECEIVED_GROUP_LEFT",Object(o.l)()),h=Object(o.g)("[news] SEND_NEWS_ITEM",Object(o.l)()),d=Object(o.g)("[news] SEND_NEWS_ITEM_COMPLETE",Object(o.l)()),p=Object(o.g)("[news] GET_ALL_GROUPS"),g=Object(o.g)("[news] GET_ALL_GROUPS_Success",Object(o.l)()),f=Object(o.g)("[news] GET_ALL_GROUPS_Failure",Object(o.l)()),O=Object(o.g)("[news] receivedGroupHistory",Object(o.l)()),m=Object(o.g)("[news] receivedItemAction",Object(o.l)());class j{constructor(t,e,n,s){this.header=t,this.newsText=e,this.author=n,this.newsGroup=s}}var w=n("lJxs"),v=n("fXoL");const I=function(){var t={EntitiesOnly:0,Both:1,None:2};return t[t.EntitiesOnly]="EntitiesOnly",t[t.Both]="Both",t[t.None]="None",t}();function T(t){return function(e,n){const s={ids:[...n.ids],entities:Object.assign({},n.entities)},i=t(e,s);return i===I.Both?Object.assign({},n,s):i===I.EntitiesOnly?Object.assign(Object.assign({},n),{entities:s.entities}):n}}function y(t,e){const n=e(t);return Object(v.Y)()&&void 0===n&&console.warn("@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.","You should probably provide your own `selectId` implementation.","The entity that was passed:",t,"The `selectId` implementation:",e.toString()),n}function C(t){function e(e,n){const s=y(e,t);return s in n.entities?I.None:(n.ids.push(s),n.entities[s]=e,I.Both)}function n(t,n){let s=!1;for(const i of t)s=e(i,n)!==I.None||s;return s?I.Both:I.None}function s(t,e){return e.ids=[],e.entities={},n(t,e),I.Both}function i(t,e){const n=(t instanceof Array?t:e.ids.filter(n=>t(e.entities[n]))).filter(t=>t in e.entities).map(t=>delete e.entities[t]).length>0;return n&&(e.ids=e.ids.filter(t=>t in e.entities)),n?I.Both:I.None}function o(t,e){return c([t],e)}function c(e,n){const s={};return(e=e.filter(t=>t.id in n.entities)).length>0?e.filter(e=>function(e,n,s){const i=Object.assign({},s.entities[n.id],n.changes),o=y(i,t),c=o!==n.id;return c&&(e[n.id]=o,delete s.entities[n.id]),s.entities[o]=i,c}(s,e,n)).length>0?(n.ids=n.ids.map(t=>s[t]||t),I.Both):I.EntitiesOnly:I.None}function r(e,s){const i=[],o=[];for(const n of e){const e=y(n,t);e in s.entities?o.push({id:e,changes:n}):i.push(n)}const r=c(o,s),u=n(i,s);switch(!0){case u===I.None&&r===I.None:return I.None;case u===I.Both||r===I.Both:return I.Both;default:return I.EntitiesOnly}}return{removeAll:function(t){return Object.assign({},t,{ids:[],entities:{}})},addOne:T(e),addMany:T(n),addAll:T(s),setAll:T(s),setOne:T((function(e,n){const s=y(e,t);return s in n.entities?(n.entities[s]=e,I.EntitiesOnly):(n.ids.push(s),n.entities[s]=e,I.Both)})),updateOne:T(o),updateMany:T(c),upsertOne:T((function(t,e){return r([t],e)})),upsertMany:T(r),removeOne:T((function(t,e){return i([t],e)})),removeMany:T(i),map:T((function(t,e){return c(e.ids.reduce((n,s)=>{const i=t(e.entities[s]);return i!==e.entities[s]&&n.push({id:s,changes:i}),n},[]).filter(({id:t})=>t in e.entities),e)})),mapOne:T((function({map:t,id:e},n){const s=n.entities[e];return s?o({id:e,changes:t(s)},n):I.None}))}}const E="newses",U=function(t={}){const{selectId:e,sortComparer:n}=Object.assign({sortComparer:!1,selectId:t=>t.id},t),s={getInitialState:function(t={}){return Object.assign({ids:[],entities:{}},t)}},i={getSelectors:function(t){const e=t=>t.ids,n=t=>t.entities,s=Object(o.j)(e,n,(t,e)=>t.map(t=>e[t])),i=Object(o.j)(e,t=>t.length);return t?{selectIds:Object(o.j)(t,e),selectEntities:Object(o.j)(t,n),selectAll:Object(o.j)(t,s),selectTotal:Object(o.j)(t,i)}:{selectIds:e,selectEntities:n,selectAll:s,selectTotal:i}}},c=n?function(t,e){const{removeOne:n,removeMany:s,removeAll:i}=C(t);function o(t,e){return c([t],e)}function c(e,n){const s=e.filter(e=>!(y(e,t)in n.entities));return 0===s.length?I.None:(l(s,n),I.Both)}function r(t,e){return e.entities={},e.ids=[],c(t,e),I.Both}function u(t,e){return a([t],e)}function a(e,n){const s=[],i=e.filter(e=>function(e,n,s){if(!(n.id in s.entities))return!1;const i=Object.assign({},s.entities[n.id],n.changes),o=y(i,t);return delete s.entities[n.id],e.push(i),o!==n.id}(s,e,n)).length>0;if(0===s.length)return I.None;{const t=n.ids,e=[];return n.ids=n.ids.filter((t,s)=>t in n.entities||(e.push(s),!1)),l(s,n),!i&&e.every(e=>n.ids[e]===t[e])?I.EntitiesOnly:I.Both}}function b(e,n){const s=[],i=[];for(const c of e){const e=y(c,t);e in n.entities?i.push({id:e,changes:c}):s.push(c)}const o=a(i,n),r=c(s,n);switch(!0){case r===I.None&&o===I.None:return I.None;case r===I.Both||o===I.Both:return I.Both;default:return I.EntitiesOnly}}function l(n,s){n.sort(e);const i=[];let o=0,c=0;for(;o<n.length&&c<s.ids.length;){const r=n[o],u=y(r,t),a=s.ids[c];e(r,s.entities[a])<=0?(i.push(u),o++):(i.push(a),c++)}s.ids=i.concat(o<n.length?n.slice(o).map(t):s.ids.slice(c)),n.forEach((e,n)=>{s.entities[t(e)]=e})}return{removeOne:n,removeMany:s,removeAll:i,addOne:T(o),updateOne:T(u),upsertOne:T((function(t,e){return b([t],e)})),addAll:T(r),setAll:T(r),setOne:T((function(e,n){const s=y(e,t);return s in n.entities?(n.ids=n.ids.filter(t=>t!==s),l([e],n),I.Both):o(e,n)})),addMany:T(c),updateMany:T(a),upsertMany:T(b),map:T((function(t,e){return a(e.ids.reduce((n,s)=>{const i=t(e.entities[s]);return i!==e.entities[s]&&n.push({id:s,changes:i}),n},[]),e)})),mapOne:T((function({map:t,id:e},n){const s=n.entities[e];return s?u({id:e,changes:t(s)},n):I.None}))}}(e,n):C(e);return Object.assign(Object.assign(Object.assign({selectId:e,sortComparer:n},s),i),c)}({selectId:t=>t.id}),G=U.getInitialState({groups:[]}),N=Object(o.i)(G,Object(o.k)(g,(t,e)=>Object.assign(Object.assign({},t),{groups:e.groups})),Object(o.k)(u,(t,e)=>{let n=t.groups.indexOf(e.group)>-1?t.groups:t.groups.concat(e.group);return Object.assign(Object.assign({},t),{groups:n})}),Object(o.k)(m,(t,e)=>U.addOne(e.newsItem,t)),Object(o.k)(O,(t,e)=>(console.info("inside reducer: ",e.newsItems),U.setAll(e.newsItems,t))),Object(o.k)(l,(t,e)=>{const n=[];for(const s of t.groups)s!==e.group&&n.push(s);return console.log(n),Object.assign(Object.assign({},t),{groups:n})})),{selectAll:A}=U.getSelectors(),S=Object(o.h)(E),M=Object(o.j)(S,A),B=Object(o.j)(S,t=>t.groups);var k=n("dNgK"),_=n("kmnG"),P=n("d3UM"),F=n("3Pt+"),L=n("f0Cb"),R=n("qFsG"),x=n("bTqV"),$=n("FKr1");function J(t,e){if(1&t&&(v.Ub(0,"mat-option",12),v.Ec(1),v.Tb()),2&t){const t=e.$implicit;v.mc("value",t),v.Cb(1),v.Gc("",t," ")}}function K(t,e){if(1&t&&(v.Ub(0,"tr"),v.Ub(1,"td"),v.Ec(2),v.Tb(),v.Ub(3,"td"),v.Ec(4),v.Tb(),v.Ub(5,"td"),v.Ec(6),v.Tb(),v.Ub(7,"td"),v.Ec(8),v.Tb(),v.Ub(9,"td"),v.Ec(10),v.Tb(),v.Tb()),2&t){const t=e.$implicit,n=e.index;v.Cb(2),v.Fc(n+1),v.Cb(2),v.Fc(t.header),v.Cb(2),v.Fc(t.newsText),v.Cb(2),v.Fc(t.author),v.Cb(2),v.Fc(t.newsGroup)}}function z(t,e){if(1&t&&(v.Sb(0),v.Ub(1,"div",0),v.Ub(2,"div",14),v.Ub(3,"table",15),v.Ub(4,"thead"),v.Ub(5,"tr"),v.Ub(6,"th"),v.Ec(7,"#"),v.Tb(),v.Ub(8,"th"),v.Ec(9,"header"),v.Tb(),v.Ub(10,"th"),v.Ec(11,"Text"),v.Tb(),v.Ub(12,"th"),v.Ec(13,"Author"),v.Tb(),v.Ub(14,"th"),v.Ec(15,"Group"),v.Tb(),v.Tb(),v.Tb(),v.Ub(16,"tbody"),v.Cc(17,K,11,5,"tr",16),v.Tb(),v.Tb(),v.Tb(),v.Tb(),v.Rb()),2&t){const t=v.gc().ngIf;v.Cb(17),v.mc("ngForOf",t)}}function V(t,e){1&t&&(v.Ub(0,"div",0),v.Ub(1,"span"),v.Ec(2,"No news items"),v.Tb(),v.Tb())}function q(t,e){if(1&t&&(v.Sb(0),v.Cc(1,z,18,1,"ng-container",11),v.Cc(2,V,3,0,"div",13),v.Rb()),2&t){const t=e.ngIf;v.Cb(1),v.mc("ngIf",t.length),v.Cb(1),v.mc("ngIf",0==(null==t?null:t.length))}}let D=(()=>{class t{constructor(t,e,n){this.store=t,this.snackBar=e,this.route=n,this.group="IT",this.author="",this.newsItem=new j("","",this.author,this.group)}ngOnInit(){this.newsItems$=this.store.select(M),this.groups$=this.route.data.pipe(Object(w.a)(t=>t.groups))}joinGroup(){this.store.dispatch(c({group:this.group}))}leaveGroup(){this.store.dispatch(a({group:this.group}))}sendNewsItemToGroup(){this.store.dispatch(h({newsItem:this.newsItem})),this.newsItem.header="",this.newsItem.newsText=""}}return t.\u0275fac=function(e){return new(e||t)(v.Ob(o.b),v.Ob(k.b),v.Ob(i.a))},t.\u0275cmp=v.Ib({type:t,selectors:[["app-news"]],decls:30,vars:11,consts:[[1,"row"],[1,"col-sm-9","col-md-4"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"btn","btn-success","col-sm-9","col-md-2","m-auto",3,"click"],[1,"btn","btn-danger","col-sm-9","col-md-2","m-auto",3,"click"],[1,"form-horizontal",2,"padding","10px 0",3,"ngSubmit"],["newsItemForm","ngForm"],["matInput","","type","text","name","header","placeholder","your header...","required","",3,"ngModel","ngModelChange"],["matInput","","type","text","name","newsText","placeholder","your newsText...","required","",3,"ngModel","ngModelChange"],["type","submit","mat-raised-button","",1,"col-sm-9","col-md-2",3,"disabled"],[4,"ngIf"],[3,"value"],["class","row",4,"ngIf"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"]],template:function(t,e){if(1&t&&(v.Ub(0,"div"),v.Ub(1,"div",0),v.Ub(2,"mat-form-field",1),v.Ub(3,"mat-label"),v.Ec(4,"Group"),v.Tb(),v.Ub(5,"mat-select",2),v.cc("ngModelChange",(function(t){return e.group=t})),v.Cc(6,J,2,2,"mat-option",3),v.hc(7,"async"),v.Tb(),v.Tb(),v.Ub(8,"button",4),v.cc("click",(function(){return e.joinGroup()})),v.Ec(9,"Join"),v.Tb(),v.Ub(10,"button",5),v.cc("click",(function(){return e.leaveGroup()})),v.Ec(11,"Leave"),v.Tb(),v.Tb(),v.Tb(),v.Pb(12,"br"),v.Pb(13,"mat-divider"),v.Pb(14,"br"),v.Ub(15,"form",6,7),v.cc("ngSubmit",(function(){return e.sendNewsItemToGroup()})),v.Ub(17,"div",0),v.Ub(18,"mat-form-field",1),v.Ub(19,"input",8),v.cc("ngModelChange",(function(t){return e.newsItem.header=t})),v.Tb(),v.Tb(),v.Ub(20,"mat-form-field",1),v.Ub(21,"input",9),v.cc("ngModelChange",(function(t){return e.newsItem.newsText=t})),v.Tb(),v.Tb(),v.Ub(22,"button",10),v.Ec(23),v.Tb(),v.Tb(),v.Tb(),v.Pb(24,"br"),v.Pb(25,"br"),v.Pb(26,"mat-divider"),v.Pb(27,"br"),v.Cc(28,q,3,2,"ng-container",11),v.hc(29,"async")),2&t){const t=v.sc(16);v.Cb(5),v.mc("ngModel",e.group),v.Cb(1),v.mc("ngForOf",v.ic(7,7,e.groups$)),v.Cb(13),v.mc("ngModel",e.newsItem.header),v.Cb(2),v.mc("ngModel",e.newsItem.newsText),v.Cb(1),v.mc("disabled",!t.valid),v.Cb(1),v.Gc(" Send News to: ",e.group," "),v.Cb(5),v.mc("ngIf",v.ic(29,9,e.newsItems$))}},directives:[_.c,_.f,P.a,F.m,F.p,s.m,L.a,F.t,F.n,F.o,R.b,F.c,F.r,x.b,s.n,$.n],pipes:[s.b],styles:[""]}),t})();var X=n("vkgz"),Y=n("pLZG"),H=n("SxV6"),W=n("nYR2");let Z=(()=>{class t{constructor(t){this.store=t,this.isBusy=!1}resolve(t,e){return this.store.pipe(Object(o.m)(B),Object(X.a)(t=>{this.isBusy||0!=t.length||(this.isBusy=!0,this.store.dispatch(p()))}),Object(Y.a)(t=>t.length>0),Object(H.a)(),Object(W.a)(()=>this.isBusy=!1))}}return t.\u0275fac=function(e){return new(e||t)(v.ac(o.b))},t.\u0275prov=v.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Q=n("aRR9"),tt=n("fi0X");const et=[{path:"",component:D,resolve:{groups:Z},canActivate:[(()=>{class t{constructor(t,e){this.authorize=t,this.router=e}canActivate(t,e){return this.authorize.isAuthenticated().pipe(Object(X.a)(t=>this.handleAuthorization(t,e)))}canActivateChild(t,e){return this.canActivate(t,e)}handleAuthorization(t,e){t||this.router.navigate(Q.a.LoginPathComponents,{queryParams:{returnUrl:e.url}})}}return t.\u0275fac=function(e){return new(e||t)(v.ac(tt.b),v.ac(i.f))},t.\u0275prov=v.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()]}];let nt=(()=>{class t{}return t.\u0275mod=v.Mb({type:t}),t.\u0275inj=v.Lb({factory:function(e){return new(e||t)},imports:[[i.j.forChild(et)],i.j]}),t})();var st=n("9jGm"),it=n("LRne"),ot=n("eIep"),ct=n("bOdf"),rt=n("JIr8"),ut=n("AytR"),at=n("Gpoy"),bt=n("5+tZ"),lt=n("tk/3");let ht=(()=>{class t{constructor(t,e,n){this.http=t,this.authService=e,this.store=n,this.authService.getAccessToken().pipe(Object(bt.a)(t=>(this.hubConnection=(new at.a).withUrl(ut.a.serverUrl+"/news",{accessTokenFactory:()=>t}).configureLogging(ut.a.production?at.b.None:at.b.Information).build(),this.registerEvents(),this.connect(),Object(it.a)(this.hubConnection)))).subscribe(t=>console.log("ctor of SignalrnewsService"))}connect(){this.hubConnection.start().then(()=>console.log("Connection started")).catch(t=>console.log("Error while starting connection: ",t))}disconnect(){this.hubConnection.stop().catch(t=>console.log("Error while stopping connection: ",t))}registerEvents(){this.hubConnection.on("JoinGroup",t=>{console.log("recieved data from the hub: ",t),this.store.dispatch(u({group:t}))}),this.hubConnection.on("LeaveGroup",t=>{this.store.dispatch(l({group:t}))}),this.hubConnection.on("History",t=>{this.store.dispatch(O({newsItems:t}))}),this.hubConnection.on("Send",t=>{this.store.dispatch(m({newsItem:t}))})}joinGroup(t){this.hubConnection&&this.hubConnection.invoke("JoinGroup",t)}leaveGroup(t){this.hubConnection&&this.hubConnection.invoke("LeaveGroup",t)}getAllGroups(){return this.http.get(ut.a.serverUrl+"/api/news")}send(t){return this.hubConnection&&this.hubConnection.invoke("Send",t),t}}return t.\u0275fac=function(e){return new(e||t)(v.ac(lt.b),v.ac(tt.b),v.ac(o.b))},t.\u0275prov=v.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),dt=(()=>{class t{constructor(t,e){this.actions$=t,this.newsService=e,this.joinGroup$=Object(st.c)(()=>this.actions$.pipe(Object(st.d)(c),Object(ot.a)(t=>(this.newsService.joinGroup(t.group),Object(it.a)(r({group:t.group})))))),this.leaveGroup$=Object(st.c)(()=>this.actions$.pipe(Object(st.d)(a),Object(ot.a)(t=>(this.newsService.leaveGroup(t.group),Object(it.a)(b({group:t.group})))))),this.getAllGroups$=Object(st.c)(()=>this.actions$.pipe(Object(st.d)(p),Object(ct.a)(t=>this.newsService.getAllGroups().pipe(Object(w.a)(t=>g({groups:t})),Object(rt.a)(t=>Object(it.a)(f({error:t}))))))),this.sendNewItem$=Object(st.c)(()=>this.actions$.pipe(Object(st.d)(h),Object(ot.a)(t=>(this.newsService.send(t.newsItem),Object(it.a)(d({newsItem:t.newsItem}))))))}}return t.\u0275fac=function(e){return new(e||t)(v.ac(st.a),v.ac(ht))},t.\u0275prov=v.Kb({token:t,factory:t.\u0275fac}),t})();var pt=n("hctd");let gt=(()=>{class t{}return t.\u0275mod=v.Mb({type:t}),t.\u0275inj=v.Lb({factory:function(e){return new(e||t)},imports:[[s.c,pt.a,F.i,nt,o.d.forFeature(E,N),st.b.forFeature([dt])]]}),t})()}}]);