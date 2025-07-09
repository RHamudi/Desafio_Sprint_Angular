import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { RequestsService } from '../services/requests.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private loginService: LoginService) { }

  submitForm(form: NgForm) {
    var user: Usuario = {
      nome: form.value.username,
      senha: form.value.password
    }
    this.loginService.onLogin(user);
  }
}
