import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContent3 } from './app-content-3';

describe('AppContent3', () => {
  let component: AppContent3;
  let fixture: ComponentFixture<AppContent3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppContent3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContent3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
