import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainContainer } from './app-main-container';

describe('AppMainContainer', () => {
  let component: AppMainContainer;
  let fixture: ComponentFixture<AppMainContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMainContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMainContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
