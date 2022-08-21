import { Component, OnDestroy, OnInit } from '@angular/core';
import {map, Subscription} from 'rxjs';
import { Datos, ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit, OnDestroy {
  datos_observable: Datos[] = [];
  datos_numbers: number[] = [];
  datos_promise: Datos[] = [];
  $promise!: Promise<Datos[]>;
  subscribcion!: Subscription;
  subscribcion_numbers!: Subscription;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.$promise = this.service.obtenerDatosPromesa();
    this.$promise.then(data => {
      this.datos_promise = data;
    }
    );

    this.subscribcion = this.service.obtenerDatosAlumnos().subscribe(data => {
      this.datos_observable = data;
    });
    this.subscribcion_numbers = this.service.obtenerNumeros().pipe(
      map(data => {
        return data.map(item => item * 2);
      }
    )).subscribe(data => {
      this.datos_numbers = data;
    });
  }

  ngOnDestroy(): void {
    this.subscribcion.unsubscribe();
    this.subscribcion_numbers.unsubscribe();
  }
}
