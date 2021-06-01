import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyReservedComponent } from './body-reserved.component';

describe('BodyReservedComponent', () => {
  let component: BodyReservedComponent;
  let fixture: ComponentFixture<BodyReservedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyReservedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyReservedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
