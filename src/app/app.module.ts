import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './_component/navigation/navigation.component';
import { StationComponent } from './_component/station/station.component';
import { StationListComponent } from './_component/station-list/station-list.component';
import { EditComponent } from './_component/edit/edit.component';
import { CardComponent } from './_component/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StationComponent,
    StationListComponent,
    EditComponent,
    CardComponent
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
