import {CommonModule, NgFor, NgIf} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {CustomerService} from "../../serives/customer/customer.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../serives/authentication.service";
import {PaymentService} from "../../serives/payment/payment.service";


@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [DemoMaterialModule, MatTableModule, MatPaginatorModule,
    CommonModule, MatListModule, NgFor, MatIconModule, MatDividerModule,
    NgIf, MatButtonModule
  ],
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent  implements OnInit {
  public users: any
  public customers: any
  public payments: any

  //=========== begin ==============================
  constructor(
    private customerService: CustomerService,
    private authService: AuthenticationService, private paymentService: PaymentService,
    private router: Router
  ) {
  }

     //  //delete Year
   deleteYear(id: string)
   {
     
   }
  //Get all users.
  ngOnInit(): void {
    //Products
    // this.paymentService.getAllPayments().subscribe( (datas) =>{
    //   console.log(datas);
    //   this.payments =datas;
    // });

    //Get All Payment By User initiator.    
    this.paymentService.getAllPaymentByUser(localStorage.getItem('idUser')).subscribe( (datas) =>{
      console.log(datas);
      this.payments =datas;
    });


  }
}
