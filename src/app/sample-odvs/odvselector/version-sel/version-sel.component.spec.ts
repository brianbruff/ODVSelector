import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionSelComponent } from './version-sel.component';

describe('VersionSelComponent', () => {
  let component: VersionSelComponent;
  let fixture: ComponentFixture<VersionSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VersionSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
