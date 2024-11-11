import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage implements OnInit {
  cursos = [
    { id: '1', nombre: 'Programacion de aplicaciones moviles' },
    { id: '2', nombre: 'Arquitectura' },
    { id: '3', nombre: 'Calidad de software' },
    
  ];

  constructor(private router: Router) {} 

  ngOnInit() {}

  verCurso(cursoId: string) {
    this.router.navigate(['/curso-detalle', cursoId]); 
  }
}
