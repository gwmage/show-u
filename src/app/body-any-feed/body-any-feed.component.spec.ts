import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyAnyFeedComponent } from './body-any-feed.component';

describe('BodyAnyFeedComponent', () => {
  let component: BodyAnyFeedComponent;
  let fixture: ComponentFixture<BodyAnyFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyAnyFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyAnyFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
