import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Station } from 'src/app/_interfaces/station';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent {

  @Input("stations")
  allStations: Station[];

  @Output()
  select = new EventEmitter<any>();

  onSelect(station: Station) {
    this.select.emit(station);
  }

}
