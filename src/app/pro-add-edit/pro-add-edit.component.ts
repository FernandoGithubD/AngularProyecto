import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpleadosService } from '../services/empleados.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pro-add-edit',
  templateUrl: './pro-add-edit.component.html',
  styleUrls: ['./pro-add-edit.component.css']
})
export class ProAddEditComponent implements OnInit{
  proForm: FormGroup;
  categoria: string[] = [
    'Estructural',
    'Fontaneria',
    'Albañilleria',
    'Interiores',
    'Electrico',
    'Exteriores',
    'Pavimentacion',
  ];
  constructor(private _fb: FormBuilder, private _empService: EmpleadosService, private _dialogRef: MatDialogRef<ProAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data:any ) {
    this.proForm = this._fb.group({
      nombre: '',
      marca: '',
      precio: '',
      categoria: '',
      proveedor: '',
      stock: '',

    });
  }
  ngOnInit(): void {
    this.proForm.patchValue(this.data);
  }


  inFormSubmit() {
    if(this.proForm.valid){
      if(this.data){
        this._empService.updateProducto(this.data.id, this.proForm.value).subscribe({
          next: (val:any) =>{
            alert('Producto Actualizado.');
            this._dialogRef.close(true);
          },
          error:(err:any)=>{
            console.error(err);
          },
        });
      }else{
      this._empService.addProducto(this.proForm.value).subscribe({
        next: (val : any) => {
          alert('Producto Agregado');
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
