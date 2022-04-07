import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-departamentos-crud',
  templateUrl: './departamentos-crud.component.html',
  styleUrls: ['./departamentos-crud.component.css']
})
export class DepartamentosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDepartmentCreate(): void {
    this.router.navigate(['/Departments/create']);
  }

}
