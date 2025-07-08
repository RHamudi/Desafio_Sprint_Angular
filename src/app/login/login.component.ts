import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route: Router, private authService: AuthService) { }

  onLogin(form: NgForm) {
    var user: Usuario = {
      name: form.value.username,
      password: form.value.password
    }
    console.log(user)
    return this.authService.login(user);
  }
}
