import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IwaCardComponent } from './iwa-card.component';

describe('IwaCardComponent', () => {
  let component: IwaCardComponent;
  let fixture: ComponentFixture<IwaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IwaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IwaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
