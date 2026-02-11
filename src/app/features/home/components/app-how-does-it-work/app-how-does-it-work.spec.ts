import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHowDoesItWork } from './app-how-does-it-work';

describe('AppHowDoesItWork', () => {
  let component: AppHowDoesItWork;
  let fixture: ComponentFixture<AppHowDoesItWork>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHowDoesItWork]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHowDoesItWork);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
