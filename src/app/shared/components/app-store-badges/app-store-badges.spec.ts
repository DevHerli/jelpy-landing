import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppStoreBadges } from './app-store-badges';

describe('AppStoreBadges', () => {
  let component: AppStoreBadges;
  let fixture: ComponentFixture<AppStoreBadges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppStoreBadges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppStoreBadges);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
