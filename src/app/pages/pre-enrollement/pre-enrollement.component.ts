import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CustomerService} from "../../serives/customer/customer.service";
import {CustomerRequest} from "../../models/customer-request";

@Component({
  selector: 'app-pre-enrollement',
  templateUrl: './pre-enrollement.component.html',
  styleUrls: ['./pre-enrollement.component.scss']
})
export class PreEnrollementComponent {
  customerRequest: CustomerRequest = {};
  message = '';

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {
  }

  registerCustomer() {
    this.message = '';
    this.customerService.registerCustomer(this.customerRequest)
      .subscribe({
        next: (response) => {

            // inform the user
            this.message = 'Vous avez été pré-enrole avec succes.\n';
            // setTimeout(() => {
            //   // this.router.navigate(['login']);
            // }, 3000)
        }
      });

  }
}



