import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { NavController } from '@ionic/angular';
import { Subscriber } from 'rxjs';
import { UserInterface } from '../models/user-interface';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  apiURL: string = environment.apiURL;
  nombre: '';
 constructor(public authService: AuthService, public router: Router, 
            public http: HttpClient, public formBuilder: FormBuilder) { }
 

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      clave: ['', [Validators.required]]
    });
  }
  get f() { return this.loginForm.controls; }
  OnSubmitLogin(){
    console.log(this.f.usuario.value, this.f.clave.value);
    this.http.get(this.apiURL + '/controlador.php?action=getLogin&usuario=' + this.f.usuario.value + '&pass=' + this.f.clave.value).subscribe((res: any) => {
      //this.authenticationState.next(true)
        // this.token = token.access_token;
        // this.isLoggedIn = true;
         //console.log(res);
         //this.router.navigate(['home']);
         if (res.status == 'exito') {
          // this.loadingService.dismiss()
          // // TODO: Ver si se reemplaza por el obj de persona 
          // this.storage.set('id_cliente', res.id_cliente);
          // this.storage.set('nombre_usuario', res.nombre);
          // this.storage.set('localidad', res.localidad);
          // this.storage.set('telefono', res.telefono);
          // this.storage.set('preventista', res.preventista);
          //this.navCtrl.setRoot(HomePage);
          this.router.navigate(['home']);
          
        }

      //     this.router.navigate(['home']);
      // console.log("si bueno mi picho");
      // this.authService.authenticationState.next(true)

      // this.loadingService.dismiss()
    }, err => {
      //console.log("si bueno mi pichoasdasdsd");
      console.error('ERROR', err);
      // this.presentAlert("Error de conexion en el servidor");
      // this.dismissLoading()
    });
  //   return this.authService
  //   .login(this.user.usuario, this.user.clave)
  //   .subscribe (
  //     data =>{
  //     console.log(data);
  //     this.router.navigate(['/home']);
  //   },
  //   error => {
  //     console.log(error)
  //   }
  //   );
 
  // }
}
}
