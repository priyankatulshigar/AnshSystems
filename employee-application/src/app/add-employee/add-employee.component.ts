import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
	public id: number;
	public name: string;
	public phone: string;
	public postalcode: string;
	public city: string;
	public address1: string;
	public address2: string;
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
  }

  addEmployee() {
	console.log('Adding employee')
	this.employeeService.addEmployee(
		{
	  		"id": this.id,
	  	    "name": this.name,
	  		"phone": this.phone,
	  		"address": {
	  			"city": this.city,
	  			"address_line1": this.address1,
	  			"address_line2": this.address2,
	  			"postal_code": this.postalcode
	  		}
	  	}
	).subscribe(res => {
		console.log(res)
		if (res.result == 'failure') {
			alert('Could not insert data to db')
		} else {
			this.router.navigate(['/employees'])
			alert('Employee inserted')
		}
	})
  }

}
