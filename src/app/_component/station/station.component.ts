import { Component } from '@angular/core';
import { Station } from 'src/app/_interfaces/station';
import { StationService } from 'src/app/_service/station.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent {

  stations: Station[] = [];

  stationService: StationService;

  constructor(stationService: StationService) {
    this.stationService = stationService;
    this.stationService.getAllStations().subscribe((data) => {
      this.stations = data["_embedded"]["stations"]
    });
  }

  onCreated(station: Station) {
    this.stations.push(station);
  }
  
}
