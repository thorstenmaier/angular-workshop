import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { combineLatest, interval, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.css"],
})
export class ReactiveComponent {
  aFormControl = new FormControl();
  bFormControl = new FormControl();
  resultFormControl = new FormControl();

  countObservable$: Observable<number>;

  result2$: Observable<number>;

  constructor() {
    this.countObservable$ = interval(1000);

    const resultObservable$ = combineLatest([
      this.aFormControl.valueChanges,
      this.bFormControl.valueChanges,
    ]).pipe(map(([a, b]) => a + b));

    resultObservable$.subscribe((result) => {
      this.resultFormControl.setValue(result);
    });

    this.result2$ = combineLatest([
      this.countObservable$,
      resultObservable$,
    ]).pipe(map(([count, result]) => count * result));
  }
}
