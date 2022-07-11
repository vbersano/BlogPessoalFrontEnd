import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  nome = environment.nome

  constructor(private router: Router) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/login'])
    }
  } 

}