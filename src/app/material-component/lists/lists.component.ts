import { CommonModule, DatePipe, NgFor } from '@angular/common';
import {Component, AfterViewInit, ViewChild, OnInit} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import {RegisterRequest} from "../../models/register-request";
import {AuthenticationResponse} from "../../models/authentication-response";
import {AuthenticationService} from "../../serives/authentication.service";
import {Router} from "@angular/router";
import {VerificationRequest} from "../../models/verification-request";
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ThemePalette} from "@angular/material/core";

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {CustomerService} from "../../serives/customer/customer.service";

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [DemoMaterialModule, MatTableModule, MatPaginatorModule, CommonModule, MatListModule, NgFor, MatIconModule, MatDividerModule, DatePipe, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],

})
export class ListsComponent implements OnInit {
  public customers: any
  //=========== begin ==============================
  constructor(
    private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe( (datas) =>{
      console.log(datas);
      this.customers =datas;
    })
  }

}
