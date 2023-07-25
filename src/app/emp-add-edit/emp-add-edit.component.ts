import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpleadosService } from '../services/empleados.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit{
  empForm: FormGroup;
  educacion: string[] = [
    'Basica',
    'Media',
    'Titulo Tecnico',
    'Titulo Profesional',
    'Sin Estudios'
  ];
  constructor(private _fb: FormBuilder, private _empService: EmpleadosService, private _dialogRef: MatDialogRef<EmpAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data:any ) {
    this.empForm = this._fb.group({
      nombre: '',
      apellido: '',
      email: '',
      fn: '',
      genero: '',
      educacion: '',
      labor: '',
      experiencia: '',
      sueldo:'',

    });
  }
  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }


  onFormSubmit() {
    if(this.empForm.valid){
      if(this.data){
        this._empService.updateEmpleado(this.data.id, this.empForm.value).subscribe({
          next: (val:any) =>{
            alert('Empleado Actualizado.');
            this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          },
        });
      }else{
      this._empService.addEmpleado(this.empForm.value).subscribe({
        next: (val : any) => {
          alert('Empleado Agregado');
          this._dialogRef.close(true);

        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
      
      
    }
  }

}
