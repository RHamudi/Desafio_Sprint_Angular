import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private route: Router) { }

  onLogin(form: NgForm) {
    // this.route.navigate(['/home'])
    console.log("teste")
    console.log(form.value);
    const { username, password} = form.value;
    if(username == "admin" && password == "123456"){
      this.route.navigate(['/home'])
    }
  }
}
