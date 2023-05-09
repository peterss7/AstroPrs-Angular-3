import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormCreateComponent } from 'src/app/shared/create/form-create/form-create.component';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent {

  @ViewChild('createForm') createForm!: FormCreateComponent;

  constructor(
    private router: Router
  ) {}

  ngOnInit(){

  }

  onCreate() {
    this.createForm.submit();
  }


}
