import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadosService } from '../services/empleados.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ProAddEditComponent } from '../pro-add-edit/pro-add-edit.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  displayedColumns: string[] = ['id', 'nombre', 'marca', 'precio', 'categoria', 'proveedor', 'stock', "accion"];
  dataSource!: MatTableDataSource<any>;


  constructor(private _dialog:MatDialog, private _empService: EmpleadosService) {}



  ngOnInit(): void {
    this.getProductoList();
    
  }

  openAddEditProForm(){
    const dialogRef = this._dialog.open(ProAddEditComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getProductoList();
        }
      },
    });
  }
  getProductoList(){
    this._empService.getProductoList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);

      },
      error: console.log,
      
    })
  }
  deleteProducto(id : number) {
    this._empService.deleteProducto(id).subscribe({
      next: (res) => {
        alert('Producto Eliminado');
        this.getProductoList();

      },
      error: console.log,
    });
  }
  openProEditForm(data: any){
    const dialogRef = this._dialog.open(ProAddEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.getProductoList();
        }
      },
    });
  }

}
