import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppReviews } from './app-reviews';

describe('AppReviews', () => {
  let component: AppReviews;
  let fixture: ComponentFixture<AppReviews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppReviews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppReviews);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
