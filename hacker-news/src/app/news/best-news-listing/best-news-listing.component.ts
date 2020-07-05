import { Component, OnInit, OnDestroy } from '@angular/core';
import { GraphqlService } from '../services/graphql.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { Article, Description } from '../models/news';
import { Router } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-best-news-listing',
  templateUrl: './best-news-listing.component.html',
  styleUrls: ['./best-news-listing.component.scss']
})
export class BestNewsListingComponent implements OnInit, OnDestroy {
  articles: Article[];
  ngUnsubscribe = new Subject<void>();

  constructor(
    private graphQlService: GraphqlService,
    private router: Router,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.graphQlService.getBestNews()
      .pipe(
        takeUntil(this.ngUnsubscribe),
        map((articles: Article[]) => {
          return articles.map((a) => {
            const des = a.description as string;
            const [point, actionDate, noOfComment] = des.match(/\d+/g);
            a.description = { point, actionDate, noOfComment } as Description;
            return a;
          });
        })
      )
      .subscribe((articles) => this.articles = articles as Article[]);
  }

  routeToDetail(url: string): void {
    this.newsService.$routing.next(url);
    this.router.navigate(['hacker-news/detail']);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
