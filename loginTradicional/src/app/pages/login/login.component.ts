import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private afAuth: AngularFireAuth, private router:Router) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, pass } = this.loginForm.value;
      this.afAuth.signInWithEmailAndPassword(username?? '', pass?? '')
        .then(() => {
          Swal.fire({
            title: '¡Éxito!',
            text: 'Has iniciado sesión con éxito',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.router.navigate(['/home']);
        })
        .catch(error => {
          let message;
          switch (error.code) {
            case 'auth/user-not-found':
              message = 'No existe usuario con este correo electrónico';
              break;
            case 'auth/wrong-password':
              message = 'Contraseña incorrecta';
              break;
            case 'auth/user-disabled':
              message = 'La cuenta ha sido deshabilitada';
              break;
            default:
              message = 'Ocurrió un error al intentar iniciar sesión';
              break;
          }
          Swal.fire({
            title: 'Error',
            text: message,
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
          });
        });
    } else {
      // Validación del formulario fallida
      Swal.fire({
        title: 'Error',
        text: 'Por favor, revisa los campos del formulario',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });
    }
  }  
}
