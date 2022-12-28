import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deleteconfirm',
  templateUrl: './deleteconfirm.component.html',
  styleUrls: ['./deleteconfirm.component.css']
})
export class DeleteconfirmComponent {

  @Input() item:string|undefined

  // event creation

  // EventEmitter

  @Output() onCancel=new EventEmitter()

  constructor(){}

  Cancel(){

  this.onCancel.emit()

  }


}
