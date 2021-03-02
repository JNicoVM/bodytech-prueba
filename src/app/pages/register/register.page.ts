import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string;
  password: string;
  passwordConfirm : string;

  correct : boolean;

  constructor(private authService: AuthService,public router: Router) { }

  ngOnInit() {
  }

  goLogin(){
      this.router.navigate(["/login"]); 
  }

  onRegister(){
    if(this.password != this.passwordConfirm){
      alert("Las contraseñas no coinciden");
    }else{
      this.authService.register(this.email, this.password).then(res => {
        alert("Usuario creado con exito!");
        this.authService.logout;
        this.router.navigate(["/login"]);
      }).catch(
        err => {
          if(err["code"]=="auth/invalid-email"){
            alert("Ese correo electrónico no es aceptado!");
          }else if (err["code"]=="auth/email-already-in-use")
          {
            alert("Este correo electrónico ya esta registrado!");
          }
          else if (err["code"]=="auth/weak-password")
          {
            alert("La contraseña debe tener al menos 6 caracteres!");
          }
          
        }
      )
    }
    
  }
}
