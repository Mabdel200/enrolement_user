import { CommonModule, DatePipe, NgFor } from '@angular/common';
import {Component, AfterViewInit, ViewChild, OnInit} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { Router } from '@angular/router';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { CustomerService } from 'src/app/serives/customer/customer.service';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [DemoMaterialModule, CommonModule, MatListModule, NgFor, MatIconModule, MatDividerModule, DatePipe, MatFormFieldModule, MatInputModule, NgIf],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
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
