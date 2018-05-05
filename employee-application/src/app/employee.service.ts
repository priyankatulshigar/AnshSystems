import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  fetchEmployees() {
	  return this.http.get('http://localhost:3000/employees');
  }

  fetchEmployee(id) {
	return this.http.post<any>('http://localhost:3000/employees/byId',
  		{ id: id },
		{
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		}
	)
  }

  updateEmployee(employee) {
	return this.http.post<any>('http://localhost:3000/employees/update',
		{ employee: employee },
		{
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		}
	)
  }

  addEmployee(employee) {
	  return this.http.post<any>('http://localhost:3000/employees/add',
	   	{ employee: employee },
		{
			headers: new HttpHeaders({
				'Content-Type': 'application/json'
			})
		}
	)
  }
}
