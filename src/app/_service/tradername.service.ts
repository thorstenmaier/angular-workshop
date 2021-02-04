import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TradernameService {
  isTradernameExisting(tradername: string): Observable<TradernameExisting> {
    const serverResponse = new Subject<TradernameExisting>();
    setTimeout(() => {
      serverResponse.next({
        tradername,
        exists: ["Thorsten", "Markus"].indexOf(tradername) >= 0,
      });
    }, 1000);
    return serverResponse;
  }
}

interface TradernameExisting {
  tradername: string;
  exists: boolean;
}
