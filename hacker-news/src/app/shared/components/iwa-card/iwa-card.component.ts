import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/news/models/news';

@Component({
  selector: 'app-iwa-card',
  templateUrl: './iwa-card.component.html',
  styleUrls: ['./iwa-card.component.scss']
})
export class IwaCardComponent implements OnInit {
  @Input() article: Article;

  constructor() { }

  ngOnInit(): void { }

}
