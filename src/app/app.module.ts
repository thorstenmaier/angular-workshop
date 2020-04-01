import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './_component/navigation/navigation.component';
import { StationComponent } from './_component/station/station.component';
import { StationEditComponent } from './_component/station-edit/station-edit.component';
import { StationListComponent } from './_component/station-list/station-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StationComponent,
    StationEditComponent,
    StationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
