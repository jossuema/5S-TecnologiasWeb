import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RutasService {

  constructor() { }

  getRutas(): Ruta[] {
    return Rutas;
  }
}

export interface Ruta {
  CiudadOrigen: string;
  CiudadDestino: string;
  Precio: number;
  Descripcion: string;
  Tipo: string;
}

const Rutas: Ruta[] = [
  {
    CiudadOrigen: 'Huaquillas',
    CiudadDestino: 'Machala',
    Precio: 2.50,
    Descripcion: 'Viaje de 1 hora',
    Tipo: 'interno'
  },
  {
    CiudadOrigen: 'Huaquillas',
    CiudadDestino: 'Santa Rosa',
    Precio: 1.50,
    Descripcion: 'Viaje de media hora',
    Tipo: 'interno'
  },
  {
    CiudadOrigen: 'Huaquilas',
    CiudadDestino: 'Piura',
    Precio: 10.00,
    Descripcion: 'Viaje de 10 horas',
    Tipo: 'externo'
  },
  {
    CiudadOrigen: 'Machala',
    CiudadDestino: 'Guayaquil',
    Precio: 5.00,
    Descripcion: 'Viaje de 4 horas',
    Tipo: 'interno'
  },
  {
    CiudadOrigen: 'Machala',
    CiudadDestino: 'Cuenca',
    Precio: 7.00,
    Descripcion: 'Viaje de 6 horas',
    Tipo: 'interno'
  },
  {
    CiudadOrigen: 'Machala',
    CiudadDestino: 'Tumbes',
    Precio: 10.00,
    Descripcion: 'Viaje de 5 horas',
    Tipo: 'externo'
  },
  {
    CiudadOrigen: 'Machala',
    CiudadDestino: 'Piura',
    Precio: 15.00,
    Descripcion: 'Viaje de 8 horas',
    Tipo: 'externo'
  },
  {
    CiudadOrigen: 'Bogotá',
    CiudadDestino: 'Manizales',
    Precio: 150000,
    Descripcion: 'Viaje de 8 horas',
    Tipo: 'externo'
  },
  {
    CiudadOrigen: 'Bogotá',
    CiudadDestino: 'Ibagué',
    Precio: 100000,
    Descripcion: 'Viaje de 6 horas',
    Tipo: 'externo'
  },
  {
    CiudadOrigen: 'Bogotá',
    CiudadDestino: 'Medellín',
    Precio: 200000,
    Descripcion: 'Viaje de 10 horas',
    Tipo: 'externo'
  }
];