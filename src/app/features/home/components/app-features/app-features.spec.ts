import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFeatures } from './app-features';

describe('AppFeatures', () => {
  let component: AppFeatures;
  let fixture: ComponentFixture<AppFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFeatures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFeatures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
