import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private urlApi = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) { }

  public getData():  Observable<any> {
    return this._http.get<any>(this.urlApi)
  }

  addEmpleado(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/empleados', data);
  }

  updateEmpleado(id: number, data:any) : Observable<any>{
    return this._http.put(`http://localhost:3000/empleados/${id}`, data)
  }

  getEmpleadoList(): Observable<any>{
    return this._http.get('http://localhost:3000/empleados');
  }

  deleteEmpleado(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/empleados/${id}`);
  }

  addProducto(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/productos', data);
  }

  updateProducto(id: number, data:any) : Observable<any>{
    return this._http.put(`http://localhost:3000/productos/${id}`, data)
  }

  getProductoList(): Observable<any>{
    return this._http.get('http://localhost:3000/productos');
  }

  deleteProducto(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/productos/${id}`);
  }


}
