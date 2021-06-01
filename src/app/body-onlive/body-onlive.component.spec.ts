import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyOnliveComponent } from './body-onlive.component';

describe('BodyOnliveComponent', () => {
  let component: BodyOnliveComponent;
  let fixture: ComponentFixture<BodyOnliveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyOnliveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyOnliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
