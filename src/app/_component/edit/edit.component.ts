import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent<T> {

  @Input()
  edit: boolean = false;

  @Input()
  requestInProgress: boolean;

  @Input()
  valid: boolean;

  @Input()
  name: string = "";

  @Output()
  create = new EventEmitter<any>();

  @Output()
  update = new EventEmitter<any>();

  @Output()
  cancel = new EventEmitter<any>();

  @Output()
  delete = new EventEmitter<any>();

  onCreate() {
    this.create.emit();
  }

  onUpdate() {
    this.update.emit();
  }

  onCancel() {
    this.cancel.emit();
  }

  onDelete() {
    this.delete.emit();
  }

}
