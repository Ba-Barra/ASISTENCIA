import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
  cursos = [
    { id: '1', nombre: 'Curso1' },
    { id: '2', nombre: 'Curso2' },
    { id: '3', nombre: 'Curso3' },

  ];

  mostrarCursos = false; 

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleCursos() {
    this.mostrarCursos = !this.mostrarCursos; 
  }

  verCurso(cursoId: string) {
    this.router.navigate(['/curso-detalle', cursoId]);
  }
}
