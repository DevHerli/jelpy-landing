import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContent1 } from './app-content-1';

describe('AppContent1', () => {
  let component: AppContent1;
  let fixture: ComponentFixture<AppContent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppContent1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContent1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
