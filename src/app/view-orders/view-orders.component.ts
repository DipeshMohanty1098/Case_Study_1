import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../models/customers';
import { CustomerDataService } from '../services/customer-data.service';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  customer: Customer
  totalCost: number = 0;
  constructor(private _customerData: CustomerDataService,
    private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    const id=+ this._route.snapshot.paramMap.get('id');
    this._customerData.getCustomerOrder(id)
    .subscribe(customer=>this.customer=customer)
    
  }
  

}
