import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import { SuministrosModule } from './suministros/suministros.module';
import { UsuarioModule } from './usuario/usuario.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    SuministrosModule,
    UsuarioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
