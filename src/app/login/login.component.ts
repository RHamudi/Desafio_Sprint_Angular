import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: string = '';
  senha: string = '';

  constructor() { }

  onLogin() {
    console.log(this.usuario, this.senha);
  }
}
