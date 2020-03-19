import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';
import { Subscriber } from 'rxjs';
import { UserInterface } from '../models/user-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  

 constructor(public authService: AuthService, public router: Router) { }
 private user: UserInterface = {
  usuario: "",
  clave: ""
};

  ngOnInit() {
  }
  OnSubmitLogin()
  {
    return this.authService
    .login(this.user.usuario, this.user.clave)
    .subscribe (
      data =>{
      console.log(data);
      this.router.navigate(['/home']);
    },
    error => {
      console.log(error)
    }
    );
 
  }
}
