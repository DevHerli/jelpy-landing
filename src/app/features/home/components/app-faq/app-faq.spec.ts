import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFaq } from './app-faq';

describe('AppFaq', () => {
  let component: AppFaq;
  let fixture: ComponentFixture<AppFaq>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFaq]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFaq);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
