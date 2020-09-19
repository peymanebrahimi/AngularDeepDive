import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from "./news/news.component";
import { NewsResolverService } from "./news-resolver.service";

const routes: Routes = [
  {
    path: '', component: NewsComponent,
    resolve: { groups: NewsResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalrnewsRoutingModule { }
