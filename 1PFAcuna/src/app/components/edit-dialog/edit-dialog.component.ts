import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Curso } from '../contents/contents.component';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso
  ) {
    this.formulario = fb.group({
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido),
      email: new FormControl(data.email),
      edad: new FormControl(data.edad),
      curso: new FormControl(data.curso)
    })
  }

  ngOnInit(): void {
  }

  update(){
    this.dialogRef.close(this.formulario.value);
  }

  close(){
    this.dialogRef.close();
  }

}
