import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SampleODVSModule} from './sample-odvs/sample-odvs.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SampleODVSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
