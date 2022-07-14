import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { User } from '../model/User';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  tipoUsuario: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
    ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  cadastrar() {
    this.user.tipoUsuario = this.tipoUsuario

    if(this.user.senha != this.confirmarSenha) {
      this.alertas.showAlertInfo('Passwords are differing')
    } else {
      this.authService.register(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/login'])
        this.alertas.showAlertSuccess('User registration complete!')
      })
    }

  }

}
