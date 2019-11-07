import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ODVSelectorComponent } from './odvselector/odvselector.component';
import { YearSelComponent } from './odvselector/year-sel/year-sel.component';
import { MonthSelComponent } from './odvselector/month-sel/month-sel.component';
import { DaySelComponent } from './odvselector/day-sel/day-sel.component';
import { VersionSelComponent } from './odvselector/version-sel/version-sel.component';



@NgModule({
  declarations: [ODVSelectorComponent, YearSelComponent, MonthSelComponent, DaySelComponent, VersionSelComponent],
  exports: [
    ODVSelectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SampleODVSModule { }
