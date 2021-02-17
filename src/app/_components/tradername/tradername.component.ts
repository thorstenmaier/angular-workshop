import { Component, OnInit } from "@angular/core";
import { TradernameService } from "./../../_service/tradername.service";
import { Observable, Subject } from "rxjs";
import { debounceTime, filter, flatMap, map, startWith } from "rxjs/operators";

@Component({
  selector: "app-tradername",
  templateUrl: "./tradername.component.html",
  styleUrls: ["./tradername.component.css"],
})
export class TradernameComponent {
  tradernameExists$: Observable<boolean>;
  tradernameChangedSubject = new Subject<string>();

  constructor(private traderService: TradernameService) {

    this.tradernameExists$ = this.tradernameChangedSubject.pipe(
      debounceTime(300),
      flatMap((tradername) => traderService.isTradernameExisting(tradername)),
      map((te) => te.exists),
      startWith(true)
    );
  }
}
