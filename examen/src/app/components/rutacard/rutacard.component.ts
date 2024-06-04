import { Component } from '@angular/core';
import { Ruta, RutasService } from '../../services/rutas.service';

@Component({
  selector: 'app-rutacard',
  templateUrl: './rutacard.component.html',
  styleUrl: './rutacard.component.css'
})
export class RutacardComponent {
  rutas: Ruta[] = [];
  rutasFiltradas: Ruta[] = [];
  palabra: string = '';

  constructor(private rutasService: RutasService){

  }

  ngOnInit(): void {
    this.rutas = this.rutasService.getRutas();
    this.rutasFiltradas = this.rutas; 
  }

  mostrarTodos(){
    this.rutasFiltradas = this.rutas;
  }

  mostrarInternos(){
    this.rutasFiltradas = this.rutas.filter(ruta => ruta.Tipo === 'interno');
  }


  mostrarExternos(){
    this.rutasFiltradas = this.rutas.filter(ruta => ruta.Tipo === 'externo');
  }

  busquedaCiudad(palabra: string){
    this.rutasFiltradas = this.rutas.filter(ruta => ruta.CiudadOrigen.toLowerCase().includes(palabra.toLowerCase()) || ruta.CiudadDestino.toLowerCase().includes(palabra.toLowerCase()));
  }
}
