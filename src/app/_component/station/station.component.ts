import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { flatMap, map, startWith } from 'rxjs/operators';
import { DeleteStationCommand } from 'src/app/_interfaces/delete-station-command';
import { Station } from 'src/app/_interfaces/station';
import { UdpateStationCommand } from 'src/app/_interfaces/update-station-command';
import { AddStationCommand } from './../../_interfaces/add-station-command';
import { IsStationNameUniqueCommand } from './../../_interfaces/is-station-name-unique-command';
import { ListStationCommand } from './../../_interfaces/list-station-command';
import { HttpService } from './../../_service/http.service';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent {

  stations: Station[] = [];

  selectedStation: Station = this.createEmptyStation();

  httpService: HttpService;

  requestInProgress = false;

  nameChangedSubject = new Subject<any>();

  nameUnique$;

  constructor(httpService: HttpService) {
    this.httpService = httpService;
    this.loadAllStations();

    this.nameUnique$ = this.nameChangedSubject.pipe(
      map(station => JSON.parse(JSON.stringify(station))), // Station kopieren
      flatMap(station => this.httpService.execute(new IsStationNameUniqueCommand(station.id ? station.id : "-1", station.name))),
      map(serverResult => serverResult.unique),
      startWith(true),
    );
  }
  
  onCreate() {
    this.requestInProgress = true;
    this.httpService.execute(new AddStationCommand(this.selectedStation)).subscribe((response) => {
      this.requestInProgress = false;
      this.stations.push(response.station);
      this.selectedStation = this.createEmptyStation();
    }, (error) => {
      console.error(error);
      this.requestInProgress = false;
    });
  }

  onUpdate() {
    this.httpService.execute(new UdpateStationCommand(this.selectedStation)).subscribe((stationFromServer) => {
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
    this.httpService.execute(new DeleteStationCommand(this.selectedStation.id)).subscribe((result) => {
      this.selectedStation = this.createEmptyStation();
      this.loadAllStations();
    });
  }

  private loadAllStations() {
    this.httpService.execute(new ListStationCommand()).subscribe((response) => {
      this.stations = response.stations;
    });
  }

  private createEmptyStation(): Station {
    return {
      id: "",
      name: ""
    };
  }
}
