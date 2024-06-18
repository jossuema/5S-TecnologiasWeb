import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  signUpForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log(this.signUpForm.value);
      // Aquí iría la lógica para manejar los datos del formulario
    }
  }
}
