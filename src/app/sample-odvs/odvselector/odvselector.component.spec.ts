import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ODVSelectorComponent } from './odvselector.component';

describe('ODVSelectorComponent', () => {
  let component: ODVSelectorComponent;
  let fixture: ComponentFixture<ODVSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ODVSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ODVSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
