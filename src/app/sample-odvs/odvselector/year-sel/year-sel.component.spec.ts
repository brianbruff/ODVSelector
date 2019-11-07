import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearSelComponent } from './year-sel.component';

describe('YearSelComponent', () => {
  let component: YearSelComponent;
  let fixture: ComponentFixture<YearSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
