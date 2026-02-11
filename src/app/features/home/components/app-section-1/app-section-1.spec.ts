import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSection1 } from './app-section-1';

describe('AppSection1', () => {
  let component: AppSection1;
  let fixture: ComponentFixture<AppSection1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppSection1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppSection1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
