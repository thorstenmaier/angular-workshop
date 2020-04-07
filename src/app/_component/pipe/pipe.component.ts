import { Component, OnInit } from '@angular/core';
import { StationService } from 'src/app/_service/station.service';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  birthday = new Date();

  object = {
    id: 4,
    name: "Thorsten"
  }

  stationService: StationService

  constructor(stationService: StationService) {
    this.stationService = stationService;
  }

  ngOnInit(): void {
  }

}
