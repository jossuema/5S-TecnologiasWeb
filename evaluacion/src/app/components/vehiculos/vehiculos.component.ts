import { Component } from '@angular/core';
import { Vehiculo, VehiculosService } from '../../services/vehiculos.service';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.css'
})
export class VehiculosComponent {
  vehiculos:Vehiculo[] = [];
  vehiculosFiltrados:Vehiculo[] = [];
  palabra:string = "";

  constructor(private vehiculosService: VehiculosService){

  }

  ngOnInit(): void {
    this.vehiculos = this.vehiculosService.getVehiculos();
    this.vehiculosFiltrados = this.vehiculos; 
  }

  mostrarTodos(){
    this.vehiculosFiltrados = this.vehiculos;
  }

  mostrarVMasMantenimiento(){
    
    let placas:[string] = [""];
    placas.pop();
    let vehilos:{[key:string]:number} = {};

    this.vehiculos.forEach(vehiculo => {
      if(!placas.includes(vehiculo.placa)){
        placas.push(vehiculo.placa);
      }
    });

    placas.forEach(placa => {
      this.vehiculos.forEach(vehiculo => {
        if(placa == vehiculo.placa){
          if(vehilos[placa] == undefined){
            vehilos[placa] = 1;
          }else{
            vehilos[placa] += 1;
          }
        }
      });
    });

    let vehiculoMasMantenimiento = "";
    let cantidadMantenimientos = 0;
    
    for(let [key, value] of Object.entries(vehilos)){
      if(value > cantidadMantenimientos){
        cantidadMantenimientos = value;
        vehiculoMasMantenimiento = key;
      }
    }

    this.vehiculosFiltrados = this.vehiculos.filter(vehiculo => vehiculo.placa == vehiculoMasMantenimiento);
  }

  mostrarVehiculosPorAnio(){
    this.vehiculosFiltrados = this.vehiculos.sort((a,b) => a.anio - b.anio);
  }

  mostrarMarcaMasPopular(){
    let marcas:[string] = [""];
    marcas.pop();
    let marcasVehiculos:{[key:string]:number} = {};

    this.vehiculos.forEach(vehiculo => {
      if(!marcas.includes(vehiculo.marca)){
        marcas.push(vehiculo.marca);
      }
    });

    marcas.forEach(marca => {
      this.vehiculos.forEach(vehiculo => {
        if(marca == vehiculo.marca){
          if(marcasVehiculos[marca] == undefined){
            marcasVehiculos[marca] = 1;
          }else{
            marcasVehiculos[marca] += 1;
          }
        }
      });
    });

    let marcaMasPopular = "";
    let cantidadVehiculos = 0;
    
    for(let [key, value] of Object.entries(marcasVehiculos)){
      if(value > cantidadVehiculos){
        cantidadVehiculos = value;
        marcaMasPopular = key;
      }
    }

    this.vehiculosFiltrados = this.vehiculos.filter(vehiculo => vehiculo.marca == marcaMasPopular);
  }

  busquedaPorMantenimiento(x:string){
    console.log(x);
    this.vehiculosFiltrados = this.vehiculos.filter(vehiculo => vehiculo.mantenimiento.includes(x));
  }
}

