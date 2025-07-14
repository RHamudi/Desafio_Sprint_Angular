import { inject, Injectable } from '@angular/core';
import { RequestsService } from './requests.service';
import { Router } from '@angular/router';
import { Usuario } from '../login/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private requests = inject(RequestsService);
  private route = inject(Router);

  constructor() { }

  changeAutoLogin(event: boolean){
    if(event){
      localStorage.setItem("autoLogin", "true")
    } else {
      localStorage.setItem("autoLogin", "false")
    }
  }

  onLogin(user: Usuario) {
    this.requests.verifyUser(user).subscribe({
      next: (res: Usuario) => {
      localStorage.setItem("user", JSON.stringify(res));
      this.route.navigate(['home'])
    },
      error: (err: any) => {
        alert("Credenciais incorretas, tente novamente")
      }
    })
  }

  isLoggedIn(){
    return !!localStorage.getItem("user");
  }

  logout(){
    localStorage.clear();
    this.route.navigate([''])
  }
}
