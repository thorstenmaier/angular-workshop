import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newStation: Station = {
    name: "Beispiel 2"
  }

  classOfButton = "btn btn-primary";

  setStationName() {
    this.newStation.name = "Neuer Wert";
    this.classOfButton = "btn btn-danger";
  }
}

interface Station {
  name: string;
}
