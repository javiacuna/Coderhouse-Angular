import { Component, OnDestroy, OnInit } from '@angular/core';
import {map, Subscription, Observable} from 'rxjs';
import { Datos, ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit, OnDestroy {
  datos_numbers: number[] = [];
  subscribcion_numbers!: Subscription;
  alumnos$ : Observable<any>;

  constructor(private service: ServiceService) { 
    this.alumnos$ = this.service.obtenerDatosAlumnos();
  }

  ngOnInit(): void {
    this.subscribcion_numbers = this.service.obtenerNumeros().pipe(
      map(data => data.map(item => item * 2)
    )).subscribe(data => {
      this.datos_numbers = data;
    });
  }

  ngOnDestroy(): void {
    this.subscribcion_numbers.unsubscribe();
  }
}
