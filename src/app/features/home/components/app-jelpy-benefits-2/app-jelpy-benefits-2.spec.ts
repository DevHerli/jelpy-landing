import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJelpyBenefits2 } from './app-jelpy-benefits-2';

describe('AppJelpyBenefits2', () => {
  let component: AppJelpyBenefits2;
  let fixture: ComponentFixture<AppJelpyBenefits2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppJelpyBenefits2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppJelpyBenefits2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
