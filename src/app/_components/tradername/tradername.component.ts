import { Component, OnInit } from "@angular/core";
import { TradernameService } from "./../../_service/tradername.service";
import { Observable, Subject } from "rxjs";
import { debounceTime, filter, flatMap, map, startWith } from "rxjs/operators";

@Component({
  selector: "app-tradername",
  templateUrl: "./tradername.component.html",
  styleUrls: ["./tradername.component.css"],
})
export class TradernameComponent implements OnInit {
  tradernameExists = true;

  constructor(private traderService: TradernameService) {}

  ngOnInit(): void {}
}
