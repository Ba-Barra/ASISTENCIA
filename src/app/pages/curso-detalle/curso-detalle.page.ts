import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.page.html',
  styleUrls: ['./curso-detalle.page.scss'],
})
export class CursoDetallePage implements OnInit {
  cursoId: string | null = null;
  alumnos: { nombre: string; correo: string }[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.cursoId = this.route.snapshot.paramMap.get('id');

    this.alumnos = [
      { nombre: 'Alumno 1', correo: 'alumno1@duoc.cl' },
      { nombre: 'Alumno 2', correo: 'alumno2@duoc.cl' },
      { nombre: 'Alumno 3', correo: 'alumno3@duoc.cl' },
     
    ];
  }
}
