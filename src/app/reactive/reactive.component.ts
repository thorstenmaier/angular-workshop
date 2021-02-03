import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { combineLatest } from "rxjs";
import { debounce, debounceTime, delay } from "rxjs/operators";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.css"],
})
export class ReactiveComponent implements OnInit {
  aFormControl = new FormControl();
  bFormControl = new FormControl();
  resultFormControl = new FormControl();

  ngOnInit(): void {
    combineLatest([
      this.aFormControl.valueChanges.pipe(debounceTime(300)),
      this.bFormControl.valueChanges,
    ]).subscribe(([a, b]) => {
      this.resultFormControl.setValue(a + b);
    });
  }
}
