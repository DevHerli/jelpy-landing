import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterContainer } from './app-footer-container';

describe('AppFooterContainer', () => {
  let component: AppFooterContainer;
  let fixture: ComponentFixture<AppFooterContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFooterContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFooterContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
