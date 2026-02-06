import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIconfontGrid } from './app-iconfont-grid';

describe('AppIconfontGrid', () => {
  let component: AppIconfontGrid;
  let fixture: ComponentFixture<AppIconfontGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppIconfontGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppIconfontGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
