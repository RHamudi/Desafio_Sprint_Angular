import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: string = '';
  senha: string = '';

  constructor(private route: Router) { }

  onLogin() {
    this.route.navigate(['/home'])
    console.log(this.usuario, this.senha);
  }
}
