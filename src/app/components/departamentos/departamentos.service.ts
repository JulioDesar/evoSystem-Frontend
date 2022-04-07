
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Departamento } from './departamento.model';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {

  baseUrl = 'http://localhost:8081/Departments/';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(departamento: Departamento): Observable<Departamento>{
    return this.http.post<Departamento>(this.baseUrl, departamento)
  }
}
