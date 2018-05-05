import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
	{ path: 'employees', component: ListEmployeesComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	Ng2TableModule,
	RouterModule.forRoot(
		appRoutes
	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
