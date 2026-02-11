import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContent2 } from './app-content-2';

describe('AppContent2', () => {
  let component: AppContent2;
  let fixture: ComponentFixture<AppContent2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppContent2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppContent2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
