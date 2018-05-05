import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public id: number;
  public name: string;
  public phone: string;
  public postalcode: string;
  public city: string;
  public address1: string;
  public address2: string;

  constructor( private activeRoute: ActivatedRoute, private employeeService: EmployeeService, private router: Router ) { }

  ngOnInit() {
		this.id = this.activeRoute.snapshot.params['id'];
		var self = this;
		this.employeeService.fetchEmployee(this.id).subscribe(result => {
			self.name = result.name;
			self.phone = result.phone;
			self.postalcode = result.address.postal_code;
			self.city = result.address.city;
			self.address1 = result.address.address_line1;
			self.address2 = result.address.address_line2;
		})
  }

  UpdateEmployee() {
	  this.employeeService.updateEmployee({
		  "id": this.id,
		  "name": this.name,
		  "phone": this.phone,
		  "address": {
			  "city": this.city,
			  "address_line1": this.address1,
			  "address_line2": this.address2,
			  "postal_code": this.postalcode
		  }
	  }).subscribe(res => {
  		console.log(res)
  		if (res.result == 'failure') {
  			alert('Could not update employee')
  		} else {
			this.router.navigate(['/employees'])
  			alert('Employee updated')
  		}
  	})

  }

}
