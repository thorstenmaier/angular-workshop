import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Station } from 'src/app/_interfaces/station';
import { StationService } from 'src/app/_service/station.service';


@Component({
  selector: 'app-station-edit',
  templateUrl: './station-edit.component.html',
  styleUrls: ['./station-edit.component.css']
})
export class StationEditComponent implements OnInit {

  ngOnInit(): void {
  }

  newStation: Station = {
    name: "",
    id: ""
  }

  lastSavedStation: Station = null;

  requestInProgress = false;

  stationService: StationService;

  @Output()
  created = new EventEmitter<Station>();

  constructor(stationService: StationService) {
    this.stationService = stationService;
  }

  createStation() {
    this.requestInProgress = true;

    this.stationService.createStation(this.newStation).subscribe((data) => {
      this.newStation = data;

      //this.newStation.id = new Date().getTime() + "";

      this.created.emit(this.newStation);

      //this.allStations.push(this.newStation);
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
