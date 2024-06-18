import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.signUpForm.valid) {
      const { email, pass } = this.signUpForm.value;
      this.afAuth.createUserWithEmailAndPassword(email?? '', pass?? '')
        .then(result => {
          Swal.fire({
            title: 'Registro Exitoso!',
            text: 'Tu cuenta ha sido creada correctamente.',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.router.navigate(['/home']);
        })
        .catch(error => {
          let message;
          switch (error.code) {
            case 'auth/email-already-in-use':
              message = 'El correo electrónico ya está en uso.';
              break;
            case 'auth/invalid-email':
              message = 'El correo electrónico no es válido.';
              break;
            case 'auth/weak-password':
              message = 'La contraseña es demasiado débil.';
              break;
            default:
              message = 'Ocurrió un error al registrar la cuenta.';
              break;
          }
          Swal.fire({
            title: 'Error en el Registro',
            text: message,
            icon: 'error',
            confirmButtonText: 'Cerrar'
          });
        });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, revisa los campos del formulario.',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      });
      console.log(this.signUpForm);
    }
  }
  
  

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

}
