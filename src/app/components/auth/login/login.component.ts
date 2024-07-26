import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private router: Router, private apiservice: ApiService) {}

  user = {
    username: '',
    password: ''
  }

  SignIn(){
    this.apiservice.SignIn(this.user).subscribe(x => {
      console.log(x);
      localStorage.setItem('token', x.token);
      this.router.navigate(['/index']);

    }, err => alert("Correo o contraseñas erroneas"))
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Prevenir comportamiento predeterminado
    this.router.navigate(['/index']); // Navegar a la nueva ruta
  }
}
