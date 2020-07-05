import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  $routing = new BehaviorSubject<string>('');

  constructor() { }


}
