import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customers';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(private _http: HttpClient) { }
  getCustomers(): Observable<Customer[]>{
    return this._http.get<Customer[]>('http://localhost:3000/customer');
  }

  getCustomerOrder(id: number): Observable<Customer>{
    return this._http.get<Customer>(`http://localhost:3000/customer/${id}`);
  }
}
