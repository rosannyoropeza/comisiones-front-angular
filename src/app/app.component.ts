import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  datos: Array<any> = [];
  items:object = {
    id : null,
    type : "",
    name: ""
  };

  constructor(){

  }

  ngOnInit() {
    this.datos = [
      {
        id: 1,
        type: "Porcentaje",
        name: "Tarifa Plana por Agente"
      },
      {
        id: 2,
        type: "Porcentaje",
        name: "Tarifa Particular por Agnte y Servicio"
      },
      {
        id: 3,
        type: "Porcentaje",
        name: "Tarifa por Servicio en Región"
      },
      {
        id: 4,
        type:"Monto fijo",
        name: "Tarifa por Servicio en Red"
      }
    ];
  }

  EditRecord(item: any){
    console.log("Este es el objeto a Editar", item)
    this.items = {
      id : item.id,
      type : item.type,
      name:item.name
    };
  }

  onSubmit(){
    console.log("Se guardo el formulario");
  }
}


