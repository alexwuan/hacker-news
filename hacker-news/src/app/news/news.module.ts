import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestNewsListingComponent } from './best-news-listing/best-news-listing.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BestNewsListingComponent,
    NewsDetailComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ]
})
export class NewsModule { }
