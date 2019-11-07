import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthSelComponent } from './month-sel.component';

describe('MonthSelComponent', () => {
  let component: MonthSelComponent;
  let fixture: ComponentFixture<MonthSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
