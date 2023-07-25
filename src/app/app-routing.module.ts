import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { EmpleadosTestingComponent } from './empleados-testing/empleados-testing.component';
import { TestApiComponent } from './test-api/test-api.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'addemp', component: EmpleadosTestingComponent},
  {path: 'addpro', component: ProductsComponent },
  {path: 'testapi', component: TestApiComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
