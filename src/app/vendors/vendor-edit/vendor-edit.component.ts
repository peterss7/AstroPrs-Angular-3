import { Component, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/model/vendor.model';
import { AuthService } from 'src/app/service/auth.service';
import { EditService } from 'src/app/service/edit.service';
import { VendorService } from 'src/app/service/vendor.service';
import { FormEditComponent } from 'src/app/shared/edit/form-edit/form-edit.component';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent {

  @ViewChild('editForm') editForm!: FormEditComponent;



  vendor!: Vendor;
  id: number = 0;
  submitted: boolean = false;

  constructor(
    private vendorService: VendorService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(parms => this.id = parms['id']);
    this.vendorService.get(this.id).subscribe(
      v => this.vendor = v as Vendor,
      error => console.error("ERROR IN VENDOR GET: ", error));

  }

  onEdit() {
    this.editForm.submit();
  }

}
