import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private dbPathAlumnos = '/alumnos';
  private dbPathAsistencias = '/asistencias';

  constructor(private db: AngularFireDatabase) {}

  // **Alumnos**

  // Crear nuevo alumno
  crearAlumno(alumno: any): Promise<void> {
    const id = this.db.createPushId();
    return this.db.object(`${this.dbPathAlumnos}/${id}`).set({ id, ...alumno });
  }

  // Obtener lista de alumnos
  obtenerAlumnos(): Observable<any[]> {
    return this.db.list(this.dbPathAlumnos).valueChanges();
  }

  // Obtener datos de un alumno específico por ID
  obtenerAlumnoPorId(id: string): Observable<any> {
    return this.db.object(`${this.dbPathAlumnos}/${id}`).valueChanges();
  }

  // Actualizar datos de un alumno
  actualizarAlumno(id: string, datos: any): Promise<void> {
    return this.db.object(`${this.dbPathAlumnos}/${id}`).update(datos);
  }

  // Eliminar un alumno
  eliminarAlumno(id: string): Promise<void> {
    return this.db.object(`${this.dbPathAlumnos}/${id}`).remove();
  }

  // **Asistencias**

  // Registrar una nueva asistencia
  registrarAsistencia(asistencia: any): Promise<void> {
    const id = this.db.createPushId();
    return this.db.object(`${this.dbPathAsistencias}/${id}`).set({ id, ...asistencia });
  }

  // Obtener todas las asistencias de un alumno específico
  obtenerAsistenciasPorAlumnoId(alumnoId: string): Observable<any[]> {
    return this.db.list(this.dbPathAsistencias, ref => ref.orderByChild('alumnoId').equalTo(alumnoId)).valueChanges();
  }

  // Obtener todas las asistencias
  obtenerAsistencias(): Observable<any[]> {
    return this.db.list(this.dbPathAsistencias).valueChanges();
  }

  // **Otras Entidades (si las necesitas)**
  // Repite la estructura de métodos para CRUD de otras entidades como cursos, clases, etc.
}
