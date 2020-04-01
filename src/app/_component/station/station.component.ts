import { Component, OnInit } from '@angular/core';
import { Station } from 'src/app/_interfaces/station';
import { StationService } from 'src/app/_service/station.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  ngOnInit(): void {
  }
  
  newStation: Station = {
    name: "",
    id: ""
  }

  lastSavedStation: Station = null;

  allStations: Station[] = [];

  requestInProgress = false;

  stationService: StationService;

  constructor(stationService: StationService) {
    this.stationService = stationService;

    this.stationService.getAllStations().subscribe((data) => {
      this.allStations = data["_embedded"]["stations"]
    });
  }

  createStation() {
    this.requestInProgress = true;

    this.stationService.createStation(this.newStation).subscribe((data) => {
      this.newStation = data;

      //this.newStation.id = new Date().getTime() + "";
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
    });
  }

}
