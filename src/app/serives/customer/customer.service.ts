import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CustomerRequest} from "../../models/customer-request";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8080/api/v1/auth'

  constructor(
    private http: HttpClient
  ) { }

  registerCustomer(customerRequest: CustomerRequest) {
    return this.http.post(`${this.baseUrl}/addCustomer`, customerRequest);
  }

  //  List of customers
  getCustomers(){
    return this.http.get<CustomerRequest>(`${this.baseUrl}/findAllCustomers`)
  }

}
