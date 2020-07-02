import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../services/graphql.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-best-news-listing',
  templateUrl: './best-news-listing.component.html',
  styleUrls: ['./best-news-listing.component.scss']
})
export class BestNewsListingComponent implements OnInit {
  newsListing: Observable<unknown>;

  constructor(
    private graphQlService: GraphqlService
  ) { }

  ngOnInit(): void {
    this.newsListing = this.graphQlService.getBestNews();
  }

}
