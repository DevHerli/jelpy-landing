import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPruebaCard } from './app-prueba-card';

describe('AppPruebaCard', () => {
  let component: AppPruebaCard;
  let fixture: ComponentFixture<AppPruebaCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPruebaCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPruebaCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
