import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card",
  template: `
    <div class="card" *ngIf="show">
      <div class="card-header">
        <h3>{{ title }}</h3>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input()
  title = "";

  @Input()
  show = true;
}
