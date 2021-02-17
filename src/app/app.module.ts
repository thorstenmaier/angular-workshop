import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavigationComponent } from "./_components/navigation/navigation.component";
import { StationComponent } from "./_components/station/station.component";
import { StationEditComponent } from "./_components/station-edit/station-edit.component";
import { StationListComponent } from "./_components/station-list/station-list.component";
import { CardComponent } from "./_components/card/card.component";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./_components/home/home.component";
import { PipeComponent } from "./pipe/pipe.component";

import { MatSliderModule } from "@angular/material/slider";

import { LOCALE_ID } from "@angular/core";
import localeDe from "@angular/common/locales/de";
import localeDeExtra from "@angular/common/locales/extra/de";
import { registerLocaleData } from "@angular/common";
import { MySuperCurrencyPipe } from "./my-super-currency.pipe";
import { ReactiveComponent } from "./reactive/reactive.component";
import { TradernameComponent } from "./_components/tradername/tradername.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
registerLocaleData(localeDe, localeDeExtra);

const appRoutes: Routes = [
  { path: "station", component: StationComponent },
  { path: "home", component: HomeComponent },
  { path: "pipe", component: PipeComponent },
  { path: "reactive", component: ReactiveComponent },
  { path: "tradername", component: TradernameComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StationComponent,
    StationEditComponent,
    StationListComponent,
    CardComponent,
    HomeComponent,
    PipeComponent,
    MySuperCurrencyPipe,
    ReactiveComponent,
    TradernameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatSliderModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "de" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
