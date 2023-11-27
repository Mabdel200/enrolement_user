import {Component, OnInit} from '@angular/core';
import {PaymentRequest} from "../../../models/payment-request";
import {PaymentService} from "../../../serives/payment/payment.service";
import {AuthenticationService} from "../../../serives/authentication.service";
import {Router} from "@angular/router";
import {CustomerService} from "../../../serives/customer/customer.service";
import { AuthenticationResponse } from 'src/app/models/authentication-response';

@Component({
  selector: 'app-add-payment-form',
  templateUrl: './add-payment-form.component.html',
  styleUrls: ['./add-payment-form.component.scss']
})
export class AddPaymentFormComponent implements OnInit{
  public users: any
  public customers: any


  //Form validation
  paymentRequest: PaymentRequest = {};
  authResponse: AuthenticationResponse = {};
  message = '';


  //=========== begin ==============================
  constructor(
    private paymentService: PaymentService,
    private authService: AuthenticationService, private customerService:CustomerService,
    private router: Router
  ) {}


  public dataPayment :any
  public idUser :any

registerPayment() {
      
       console.log(localStorage.getItem('idUser'));

      this.message = '';
      this.dataPayment = {
        "montant" : this.paymentRequest.montant,
        "motif" : this.paymentRequest.motif,
        "user" :{
            "id" :  localStorage.getItem('idUser')
        },
        "customer" : {
          "id": this.paymentRequest.customer
        },
      
    }

    console.log(this.dataPayment)
    this.paymentService.addPayment(this.dataPayment)
      .subscribe(
        (data) => {
          // inform the user
          this.message = 'Payment add successfully\nYou will be redirected to the List of your payment in 3 seconds';
          setTimeout(() => {
            this.router.navigate(['grid']);
          }, 3000)
        }
      );

  }

  ngOnInit(): void {

    this.authService.getUsers().subscribe( (datas) =>{
      console.log(datas);
      this.users =datas;
    });

    this.customerService.getCustomers().subscribe( (datas) =>{
      console.log(datas);
      this.customers =datas;
    });

  }
}
