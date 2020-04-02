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

  selectedStation: Station = this.createEmptyStation();

  stationService: StationService;

  requestInProgress = false;

  constructor(stationService: StationService) {
    this.stationService = stationService;
    this.loadAllStations();
  }

  onCreate() {
    this.requestInProgress = true;
    this.stationService.create(this.selectedStation).subscribe((stationFromServer) => {
      this.requestInProgress = false;
      this.stations.push(stationFromServer);
      this.selectedStation = this.createEmptyStation();
    }, (error) => {
      console.error(error);
      this.requestInProgress = false;
    });
  }

  onUpdate() {
    this.stationService.update(this.selectedStation).subscribe((stationFromServer) => {
      this.selectedStation = this.createEmptyStation();
      this.loadAllStations();
    });
  }

  onCancel() {
    this.selectedStation = this.createEmptyStation();
  }

  onSelect(station: Station) {
    this.selectedStation = JSON.parse(JSON.stringify(station));
  }

  onDelete() {
    this.stationService.delete(this.selectedStation).subscribe((result) => {
      this.selectedStation = this.createEmptyStation();
      this.loadAllStations();
    });
  }

  private loadAllStations() {
    this.stationService.getAll().subscribe((data) => {
      this.stations = data["_embedded"]["stations"]
    });
  }

  private createEmptyStation(): Station {
    return {
      id: "",
      name: ""
    };
  }
}
