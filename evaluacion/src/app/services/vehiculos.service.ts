import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  constructor() { }

  getVehiculos(): Vehiculo[] {
    return [
      {
        placa: "ABC123",
        marca: "MAZDA",
        mantenimiento: "aceite motor",
        anio: 2010,
        color:"rojo"
      },
      {
        placa: "ABC456",
        marca: "KIA",
        mantenimiento: "cambio llantas",
        anio: 2022,
        color:"negro"
      },
      {
        placa: "OAA123",
        marca: "CHEVROLET",
        mantenimiento: "aceite caja de transmision",
        anio: 2015,
        color:"blanco"
      },
      {
        placa: "PAC778",
        marca: "KIA",
        mantenimiento: "cambio de llantas",
        anio: 2021,
        color:"azul"
      },
      {
        placa: "TBG111",
        marca: "TOYOTA",
        mantenimiento: "lavada",
        anio: 2023,
        color:"negro"
      },
      {
        placa: "OBC123",
        marca: "RENAULT",
        mantenimiento: "abc de frenos",
        anio: 2010,
        color:"rojo"
      },
      {
        placa: "ABC123",
        marca: "MAZDA",
        mantenimiento: "aceite caja",
        anio: 2010,
        color:"rojo"
      },
      {
        placa: "PBC555",
        marca: "TOYOTA",
        mantenimiento: "reparación motor",
        anio: 2010,
        color:"blaco"
      },
      {
        placa: "ABC123",
        marca: "MAZDA",
        mantenimiento: "cambio de llantas",
        anio: 2010,
        color:"rojo"
      },
      {
        placa: "PBC333",
        marca: "KIA",
        mantenimiento: "limpieza de inyectores",
        anio: 2009,
        color:"naranja"
      }
    ];
  }
}

export interface Vehiculo {
  placa: string;
  marca: string;
  mantenimiento: string;
  anio: number;
  color: string;
}