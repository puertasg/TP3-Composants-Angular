import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnchangeComponent } from './onchange.component';

describe('OnchangeComponent', () => {
  let component: OnchangeComponent;
  let fixture: ComponentFixture<OnchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
