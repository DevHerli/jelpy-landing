import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppIntroVideo } from './app-intro-video';

describe('AppIntroVideo', () => {
  let component: AppIntroVideo;
  let fixture: ComponentFixture<AppIntroVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppIntroVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppIntroVideo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
