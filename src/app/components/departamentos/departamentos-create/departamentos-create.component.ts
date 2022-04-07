import { Router } from '@angular/router';
import { DepartamentosService } from './../departamentos.service';
import { Component, OnInit } from '@angular/core';
import { Departamento } from '../departamento.model';

@Component({
  selector: 'app-departamentos-create',
  templateUrl: './departamentos-create.component.html',
  styleUrls: ['./departamentos-create.component.css']
})
export class DepartamentosCreateComponent implements OnInit {

  departamento: Departamento = {
    nome: 'Departamento teste',
    sigla: 'DPT'
  }

  constructor(private departamentoService: DepartamentosService, private router: Router) { }

  ngOnInit(): void {
  }

  createDepartment(): void {

    this.departamentoService.create(this.departamento).subscribe(() => {
      this.departamentoService.showMessage("Departamento Cadastrado");
      this.router.navigate(['/Departments']);
    });
  }

  cancel(): void {
    this.router.navigate(['/Departments']);
  }

}
