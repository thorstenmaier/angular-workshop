import { Component } from '@angular/core';
import { Station } from './_interfaces/station';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  newStation: Station = {
    name: "",
    id: ""
  }

  lastSavedStation: Station = null;

  allStations: Station[] = [];

  requestInProgress = false;

  createStation() {
    this.requestInProgress = true;
    setTimeout(() => {
      this.newStation.id = new Date().getTime() + "";
      this.allStations.push(this.newStation);
      this.requestInProgress = false;
      this.lastSavedStation = this.newStation;
      this.newStation = {
        name: "",
        id: ""
      }
      setTimeout(() => {
        this.lastSavedStation = null;
      }, 5000);
    }, 2000);
  }
}
