import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  usuarios:any[];
  constructor(public navCtrl: NavController, 
              public authService: AuthService) { 
         console.log('Ingreso');
 this.authService.obtenerDatos()
 .subscribe(
 (data)=>{this.usuarios=data; console.log(data);
 },
 (error)=>{console.log(error);}
 )
       }
    
 
   ngOnInit() {
   }
 
 }