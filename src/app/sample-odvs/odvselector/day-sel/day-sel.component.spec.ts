import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaySelComponent } from './day-sel.component';

describe('DaySelComponent', () => {
  let component: DaySelComponent;
  let fixture: ComponentFixture<DaySelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaySelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaySelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
