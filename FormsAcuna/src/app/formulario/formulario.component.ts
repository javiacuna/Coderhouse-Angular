import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  ciudades: any = ['Jujuy', 'Córdoba', 'La Pampa', 'Buenos Aires', 'Chubut', 'Misiones'];
  namePattern = "[a-zA-Z ]{2,254}";

  formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.namePattern), Validators.minLength(2)]],
    apellido: ['', [Validators.required, Validators.pattern(this.namePattern), Validators.minLength(2)]],
    edad: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    domicilio: ['', [Validators.required]],
    ciudad: [null, [Validators.required]],
  })

  enviarFormulario(){
    console.log(this.formulario.value);
  }

  ngOnInit(): void {
  }

  get ciudad() {
    return this.formulario.get('ciudad');
  }

}
