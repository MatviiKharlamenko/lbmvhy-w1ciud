import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Customer } from '../../domain/customer';
import { CustomerService } from '../../service/customerservice';

@Component({
  selector: 'table-lazy-load-demo',
  templateUrl: 'table-lazy-load-demo.html',
})
export class TableLazyLoadDemo implements OnInit {
  customers!: Customer[];

  totalRecords!: number;

  loading: boolean = false;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.loading = true;
  }

  loadCustomers(event: LazyLoadEvent) {
    this.loading = true;

    setTimeout(() => {
      this.customerService
        .getCustomers({ lazyEvent: JSON.stringify(event) })
        .then((res) => {
          this.customers = res.customers;
          this.totalRecords = res.totalRecords;
          this.loading = false;
        });
    }, 1000);
  }
}
