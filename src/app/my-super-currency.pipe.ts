import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mySuperCurrency",
})
export class MySuperCurrencyPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value + "EURO";
  }
}
