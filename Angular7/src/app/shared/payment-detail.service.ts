import { PaymentDetail} from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { formatDate } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetail;
  readonly rootURL = 'http://localhost:50208/api';
  list: PaymentDetail[];
  constructor(private http:HttpClient) { }

  postPaymentDatail(){
    return this.http.post(this.rootURL+'/PaymentDetail',this.formData)
  }

  putPaymentDatail(){
    return this.http.put(this.rootURL+'/PaymentDetail/'+this.formData.PMId,this.formData)
  }

  deletePaymentDatail(id){
    return this.http.delete(this.rootURL+'/PaymentDetail/'+id)
  }

  refreshList(){
    this.http.get(this.rootURL+'/PaymentDetail')
    .toPromise()
    .then(res=>this.list = res as PaymentDetail[]);
  }
}
