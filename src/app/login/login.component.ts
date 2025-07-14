import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Usuario } from './usuario';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: LoginService) { }

  onCheckboxChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.loginService.changeAutoLogin(checked);
    console.log(localStorage.getItem("autoLogin"));
  }

  submitForm(form: NgForm) {
    var user: Usuario = {
      nome: form.value.username,
      senha: form.value.password
    }
    this.loginService.onLogin(user);
  }
}
