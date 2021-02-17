import { Injectable } from "@angular/core";
import { interval, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TradernameService {
  isTradernameExisting(tradername: string): Observable<TradernameExisting> {
    const serverResponse = new Subject<TradernameExisting>();
    console.log("#### " + tradername);

    setTimeout(() => {
      serverResponse.next({
        tradername,
        exists: ["Thorsten", "Markus"].indexOf(tradername) >= 0,
      });
    }, 1000);

    /*
    interval(1000).subscribe((i) => {
      serverResponse.next({
        tradername,
        exists: i % 2 === 0,
      });
    });
    */

    return serverResponse;
  }
}

interface TradernameExisting {
  tradername: string;
  exists: boolean;
}
