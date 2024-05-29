import { Component } from '@angular/core';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  birthday?: Date;
}

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrl: './template-forms.component.css'
})
export class TemplateFormsComponent {
  registerForm: IRegisterForm = {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    birthday: new Date()
  };

  constructor() {}
  onSubmit(): void {
    console.log('Form submitted');
  }
}
