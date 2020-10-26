import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customers';
import { CustomerDataService } from '../services/customer-data.service';


@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent implements OnInit {
  customers: Customer[]
  _filterName = ''
  filteredCustomers : Customer[]
  constructor(private _customerService: CustomerDataService) { }

  get filterName(){
    return this._filterName;
  }

  set filterName(newValue: string){
    this._filterName = newValue;
    this.filteredCustomers = this._filterName ? this.filteredCustomer(this._filterName.toLocaleLowerCase()) : this.customers
  }

  filteredCustomer(name: string){
    return this.customers.filter((customer: Customer)=> (customer.firstName + customer.lastName).toLocaleLowerCase().indexOf(name) !== -1)
  }

  ngOnInit(): void {
    this._customerService.getCustomers().subscribe(
      customers=>{
        this.customers = customers;
        this.filteredCustomers = customers;
      }
    )
  }

}
