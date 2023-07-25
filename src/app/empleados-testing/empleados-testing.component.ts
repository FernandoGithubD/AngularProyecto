import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpAddEditComponent } from '../emp-add-edit/emp-add-edit.component';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadosService } from '../services/empleados.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-empleados-testing',
  templateUrl: './empleados-testing.component.html',
  styleUrls: ['./empleados-testing.component.css']
})
export class EmpleadosTestingComponent implements OnInit{

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'fn', 'genero', 'educacion', 'labor', 'experiencia', 'sueldo', "accion"];
  dataSource!: MatTableDataSource<any>;


  constructor(private _dialog:MatDialog, private _empService: EmpleadosService) {}



  ngOnInit(): void {
    this.getEmpleadoList();
    
  }

  openAddEditEmpForm(){
    const dialogRef = this._dialog.open(EmpAddEditComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getEmpleadoList();
        }
      },
    });
  }
  getEmpleadoList(){
    this._empService.getEmpleadoList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);

      },
      error: console.log,
      
    })
  }
  deleteEmpleado(id : number) {
    this._empService.deleteEmpleado(id).subscribe({
      next: (res) => {
        alert('Empleado Eliminado');
        this.getEmpleadoList();

      },
      error: console.log,
    });
  }
  openEditForm(data: any){
    const dialogRef = this._dialog.open(EmpAddEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getEmpleadoList();
        }
      },
    });
  }

}
