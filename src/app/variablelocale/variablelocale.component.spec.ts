import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablelocaleComponent } from './variablelocale.component';

describe('VariablelocaleComponent', () => {
  let component: VariablelocaleComponent;
  let fixture: ComponentFixture<VariablelocaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariablelocaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariablelocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
