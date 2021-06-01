import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFeedItemComponent } from './widget-feed-item.component';

describe('WidgetFeedItemComponent', () => {
  let component: WidgetFeedItemComponent;
  let fixture: ComponentFixture<WidgetFeedItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFeedItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetFeedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
