import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJelpyBenefits } from './app-jelpy-benefits';

describe('AppJelpyBenefits', () => {
  let component: AppJelpyBenefits;
  let fixture: ComponentFixture<AppJelpyBenefits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppJelpyBenefits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppJelpyBenefits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
