import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import {NgForm} from '@angular/forms';
import { from } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private service: PaymentDetailService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData={
      PMId:0,
      CardNumber:'',
      ExpirationDate:'',
      CardOwnerName:'',
      CVV:''
    }
  }

  onSubmit(form:NgForm){
    this.service.postPaymentDatail(form.value).subscribe(
      res=>{
        this.resetForm(form);
        this.toastr.success("Se agrego correctamente", "Registro Paymente Detail");
      },
      err=>{
        console.log(err);
      
    }
    )
  }
}
