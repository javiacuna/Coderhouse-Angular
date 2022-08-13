import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface Curso {
  nombre: string;
  apellido: string;
  email: string;
  edad: number;
  curso: string;
}

const ELEMENT_DATA: Curso[] = [
  {nombre: 'Javier', apellido: 'Acuña', email: 'javi@gmail.com', edad: 28, curso: 'Matematica'},
  {nombre: 'Brenda', apellido: 'Cirio', email: 'bren23@gmail.com', edad: 28,curso: 'Lengua'},
  {nombre: 'Camila', apellido: 'Acosta', email: 'camila3@gmail.com', edad: 28, curso: 'Ingles'},
  {nombre: 'Celeste', apellido: 'Dascola', email: 'celeste@gmail.com', edad: 28, curso: 'Filosofia'},
]

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'email', 'curso', 'edad', 'acciones', 'agregar'];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatTable) table!: MatTable<Curso>;
  fontSizeTable : string = "20px";

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  add(){
    const dialogRef = this.dialog.open(AddDialogComponent, {
      width: '30%',
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataSource.data.push(result)
        this.table.renderRows()
      }
    })
  }

  edit(elemento: Curso){
    const dialogRef = this.dialog.open(EditDialogComponent, {
      width: '30%',
      data: elemento
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){   
        const item = this.dataSource.data.find(curso => curso.nombre === elemento.nombre && curso.apellido === elemento.apellido);
        const index = this.dataSource.data.indexOf(item!);
        this.dataSource.data[index] = result;
        this.table.renderRows();
      }
    });
  }

  delete(elemento: Curso){
    this.dataSource.data = this.dataSource.data.filter((curso: Curso) => (curso.nombre != elemento.nombre || curso.email != elemento.email || curso.curso != elemento.curso));
  }
}
