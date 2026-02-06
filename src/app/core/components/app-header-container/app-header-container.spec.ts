import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderContainer } from './app-header-container';

describe('AppHeaderContainer', () => {
  let component: AppHeaderContainer;
  let fixture: ComponentFixture<AppHeaderContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeaderContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHeaderContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
