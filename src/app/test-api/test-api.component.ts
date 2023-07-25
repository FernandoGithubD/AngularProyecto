import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit{
  data: any [] = [];

  constructor(private _empService : EmpleadosService) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this._empService.getData().subscribe(data =>{
      this.data = data;
      console.log(this.data);
      
    })

  }

}
