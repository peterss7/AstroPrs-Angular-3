import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-edit',
  templateUrl: './buttons-edit.component.html',
  styleUrls: ['./buttons-edit.component.css']
})
export class ButtonsEditComponent {

  @Output()
  onEditEvent = new EventEmitter<any>();

  onEditClick(){
    console.log("Edit button Clicked");
    this.onEditEvent.emit();
  }

}
