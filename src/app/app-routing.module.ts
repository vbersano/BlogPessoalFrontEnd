import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from './register/register.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},

  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path: 'mainpage', component: MainpageComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
