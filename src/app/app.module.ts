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
import { HomeComponent } from './_component/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LOCALE_ID} from '@angular/core';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeDe, localeDeExtra);

const appRoutes: Routes = [
  { path: 'home',    component: HomeComponent },
  { path: 'station', component: StationComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StationComponent,
    StationListComponent,
    EditComponent,
    CardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
