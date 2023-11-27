import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaymentRequest} from "../../models/payment-request";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8080/api/v1/auth'

  constructor(
    private http: HttpClient
  ) { }

  addPayment(paymentRequest: PaymentRequest) {
    return this.http.post(`${this.baseUrl}/addPayment`, paymentRequest);
  }

  //  List of Payments
  getAllPayments(){
     return this.http.get<PaymentRequest>(`${this.baseUrl}/findAllPayment`)
  }

  //Get All Payment by User.
  getAllPaymentByUser( idUser: any ){
    return this.http.get<PaymentRequest>( `${this.baseUrl}/findAllPaymentByUser/${idUser}` )
}
 



}
