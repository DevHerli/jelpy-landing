import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBrands } from './app-brands';

describe('AppBrands', () => {
  let component: AppBrands;
  let fixture: ComponentFixture<AppBrands>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBrands]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBrands);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
