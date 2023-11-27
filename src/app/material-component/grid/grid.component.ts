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
  selector: 'app-grid',
  standalone: true,
  imports: [DemoMaterialModule, MatTableModule, MatPaginatorModule,
    CommonModule, MatListModule, NgFor, MatIconModule, MatDividerModule,
    NgIf, MatButtonModule
  ],
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit{
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


  //Get all users.
  ngOnInit(): void {
    //Products
    this.paymentService.getAllPayments().subscribe( (datas) =>{
      console.log(datas);
      this.payments =datas;
    });

    // this.authService.getUsers().subscribe( (datas) =>{
    //   console.log(datas);
    //   this.users =datas;
    // });
    //
    // this.customerService.getCustomers().subscribe( (datas) =>{
    //   console.log(datas);
    //   this.customers =datas;
    // });


  }
}
