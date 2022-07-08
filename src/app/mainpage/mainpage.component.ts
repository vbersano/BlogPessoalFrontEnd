import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    if(environment.token == ''){
     // alert ('Sua sessão expirou. Faça o login novamente!')
      this.router.navigate(['/login'])
    }
  } 

}