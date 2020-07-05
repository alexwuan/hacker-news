import { Component, OnInit, OnDestroy } from '@angular/core';
import { GraphqlService } from '../services/graphql.service';
import { NewsService } from '../services/news.service';
import { Subject } from 'rxjs';
import { takeUntil, mergeMap } from 'rxjs/operators';
import { Article } from '../models/news';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit, OnDestroy {

  ngUnsubscribe = new Subject<void>();
  article: Article = null;

  constructor(
    private graphQlService: GraphqlService,
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsService.$routing
      .pipe(
        (takeUntil(this.ngUnsubscribe)),
        mergeMap((url) => this.graphQlService.getNewDetail(url)
      ))
      .subscribe((article: Article) => this.article = article);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
