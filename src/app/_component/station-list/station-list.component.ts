import { Component, Input } from '@angular/core';
import { Station } from 'src/app/_interfaces/station';

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent {

  @Input("stations")
  allStations: Station[];

}
