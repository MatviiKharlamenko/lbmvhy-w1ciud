import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(params?: any) {
    return this.http
      .get<any>('https://www.primefaces.org/data/customers', { params: params })
      .toPromise();
  }
}
