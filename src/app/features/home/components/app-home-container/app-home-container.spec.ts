import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHomeContainer } from './app-home-container';

describe('AppHomeContainer', () => {
  let component: AppHomeContainer;
  let fixture: ComponentFixture<AppHomeContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHomeContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHomeContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
