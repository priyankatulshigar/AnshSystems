import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

	public rows:Array<any> = [];
	public columns:Array<any> = [
	  {title: 'Id', name: 'id'},
	  {title: 'Name', name: 'name'},
	  {title: 'Phone', name: 'phone'},
	  {title: 'City', name: 'city'},
	  {title: 'Address1', name: 'address1'},
	  {title: 'Address2', name: 'address2'},
	  {title: 'Postal Code', name: 'postalcode'}
	];
	public config:any = {
		paging: true,
		sorting: {columns: this.columns},
		filtering: {filterString: ''},
		className: ['table-striped', 'table-bordered']
	};
  constructor(private employeeService : EmployeeService) { }

  getphonestring(phoneString) {
  	if (/^[0-9]+$/.test(phoneString)) {
  		return phoneString;
  	} else {
  		return 'NA';
  	}
  }

  ngOnInit() {
	  var self = this;
	  this.employeeService.fetchEmployees().subscribe(res => {
		  var results = <Array<any>>res;
		  self.rows = results.map(row => {
			  return {
				  id: row.id,
				  name: row.name,
				  phone: self.getphonestring(row.phone),
				  city: row.address.city,
				  address1: row.address.address_line1,
				  address2: row.address.address_line2,
				  postalcode: row.address.postal_code
			  }
		  })
	  });
  }

}
