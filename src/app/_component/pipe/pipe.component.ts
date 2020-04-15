import { Component, OnInit } from '@angular/core';
import { Observable, interval, of, zip, Subject } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

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

  observable: Observable<any>;

  buttonClicked = new Subject<any>();

  constructor() {
    this.buttonClicked.pipe(
      debounceTime(1000)
    ).subscribe((next) => {
      alert("!");
    })

    this.observable = zip(interval(3000), of(4, 7, 13, 21)).pipe(
      map(element => element[1]),
      map(number => number + 1),
      debounceTime(4000)
    );
  }

  ngOnInit(): void {
  }

}
