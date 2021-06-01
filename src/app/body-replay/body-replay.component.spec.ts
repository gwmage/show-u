import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyReplayComponent } from './body-replay.component';

describe('BodyReplayComponent', () => {
  let component: BodyReplayComponent;
  let fixture: ComponentFixture<BodyReplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyReplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyReplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
