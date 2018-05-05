import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const appRoutes: Routes = [
	{ path: 'employees/edit/:id', component: EditEmployeeComponent },
	{ path: 'employees/add', component: AddEmployeeComponent },
	{ path: 'employees', component: ListEmployeesComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	FormsModule,
	Ng2TableModule,
	RouterModule.forRoot(
		appRoutes
	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
