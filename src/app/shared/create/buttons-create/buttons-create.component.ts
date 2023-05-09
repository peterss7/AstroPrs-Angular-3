import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons-create',
  templateUrl: './buttons-create.component.html',
  styleUrls: ['./buttons-create.component.css']
})
export class ButtonsCreateComponent {

@Output()
onCreateEvent = new EventEmitter<any>();

onCreateClick(){
  this.onCreateEvent.emit();
}

}
