import { Component, Input } from '@angular/core';
import { DeletionService } from 'src/app/service/deletion.service.service';

@Component({
  selector: 'app-detail-buttons',
  templateUrl: './detail-buttons.component.html',
  styleUrls: ['./detail-buttons.component.css']
})
export class DetailButtonsComponent {

  @Input()
  id!: number;
  @Input()
  url!: string;

  constructor(
    private deletionService: DeletionService
  ){}

  ngOnInit(){}

  deleteId(){
    console.log(this.url);
    this.deletionService.deleteTypeById(this.id, this.url);
  }


}


