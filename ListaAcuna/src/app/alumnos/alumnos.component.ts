import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {
  fechaExamen = new Date(2022, 3, 15);
  titulo: string = "Lista de alumnos de materia: Matemática Discreta";

  alumnos = [
    { nombre: "Matias", apellido: "Allende", legajo: 144, notaExamen:2 },
    { nombre: "Javier", apellido: "Duri", legajo: 214, notaExamen: 5 },
    { nombre: "Maximiliano", apellido: "Berta", legajo: 215, notaExamen: 2},
    { nombre: "Marcelo", apellido: "Perez", legajo: 413, notaExamen: 6},
    { nombre: "Pedro", apellido: "Maccio", legajo: 616, notaExamen: 8},
    { nombre: "Carlos", apellido: "Martinez", legajo: 116, notaExamen: 4},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }
}
