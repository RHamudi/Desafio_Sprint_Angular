import { Injectable } from '@angular/core';
import { Usuario } from '../login/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userIsActive: boolean = false;

  constructor(private route: Router) { }

  login(user: Usuario) {
    if(user.name == "admin" && user.password == "123456"){
      localStorage.setItem("user", JSON.stringify(user))
      this.route.navigate(['home']);
      return true;
    }
    return false;
  }

  isLoggedIn(){
    return !!localStorage.getItem("user");
  }

  logout(){
    localStorage.clear();
    this.route.navigate([''])
  }
}
