import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { DepartamentosCrudComponent } from './views/departamentos-crud/departamentos-crud.component';
import { DepartamentosCreateComponent } from './components/departamentos/departamentos-create/departamentos-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "Departments",
    component: DepartamentosCrudComponent
  },
  {
    path:"Departments/create",
    component: DepartamentosCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
