import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactUs } from './app-contact-us';

describe('AppContactUs', () => {
  let component: AppContactUs;
  let fixture: ComponentFixture<AppContactUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppContactUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContactUs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
