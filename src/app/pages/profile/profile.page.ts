import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    // Inicializar el formulario aquí para evitar el error
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    // El formulario ya está inicializado en el constructor, así que este método puede estar vacío
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      console.log('Login exitoso con usuario:', username, 'y contraseña:', password);
      // Aquí podrías agregar la lógica para manejar el inicio de sesión
    } else {
      console.log('Formulario inválido');
    }
  }
}
