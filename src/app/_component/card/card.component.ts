import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card" *ngIf="show" style="margin-bottom: 15px;">
      <div class="card-header">
        <h5>{{title}}</h5>
      </div>
      <div class="card-body">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input()
  show = true;

  @Input()
  title = "";
}
