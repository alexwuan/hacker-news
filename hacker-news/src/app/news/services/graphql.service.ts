import { Injectable } from '@angular/core';
import { NewsModule } from '../news.module';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { Article } from '../models/news';
import { ARTICLE_LISTING } from './query';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) { }

  getBestNews(): Observable<unknown> {
    return this.apollo
      .watchQuery({ query: ARTICLE_LISTING })
      .valueChanges
      .pipe(map(({data}: any) => data.articles));
  }

  getNewDetail(url: string): Observable<unknown> {
    return this.apollo
      .watchQuery({
        query: ARTICLE_LISTING,
        variables: {
          url
        }
      }).valueChanges;
  }
}
