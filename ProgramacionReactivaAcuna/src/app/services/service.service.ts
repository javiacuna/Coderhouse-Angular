import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Datos {
  nombre: string;
  edad: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  alumnos: Datos[] = [
    { nombre: 'Javier', edad: 30, email: 'javi@gmail.com' },
    { nombre: 'Juan', edad: 34, email: 'juan@gmail.com' },
    { nombre: 'Celeste', edad: 54, email: 'celeste@gmail.com' },
    { nombre: 'Marcos', edad: 23, email: 'marcos3@gmail.com' }
  ]

  constructor() { }

  obtenerDatosAlumnos(): Observable<Datos[]> {
    return of(this.alumnos);
  }

  obtenerNumeros(): Observable<number[]> {
    return of(this.numeros);
  }

  obtenerDatosPromesa(): Promise<Datos[]> {
    return new Promise((resolve, reject) => {
      resolve(this.alumnos);
      reject('Error');
    });
  }
}
