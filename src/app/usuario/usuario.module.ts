import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { InicioComponent } from './pages/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';





@NgModule({
  declarations: [InicioComponent, LoginComponent],
  imports: [
    CommonModule
  ],
  exports:[
    InicioComponent
  ]
})
export class UsuarioModule { }
