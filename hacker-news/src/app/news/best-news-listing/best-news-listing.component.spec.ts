import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestNewsListingComponent } from './best-news-listing.component';

describe('BestNewsListingComponent', () => {
  let component: BestNewsListingComponent;
  let fixture: ComponentFixture<BestNewsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestNewsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestNewsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
