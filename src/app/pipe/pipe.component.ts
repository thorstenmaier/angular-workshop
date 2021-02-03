import { Component, OnInit } from "@angular/core";
import { StationService } from "../_service/station.service";

@Component({
  selector: "app-pipe",
  templateUrl: "./pipe.component.html",
  styleUrls: ["./pipe.component.css"],
})
export class PipeComponent implements OnInit {
  date = new Date();

  stationService: StationService;

  data = {
    id: 1,
    name: "Thorsten",
  };

  constructor(stationService: StationService) {
    this.stationService = stationService;
  }

  ngOnInit(): void {}
}
