import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NoticiasComponent } from './noticias/noticias.component';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [SidebarComponent, FooterComponent, NoticiasComponent],
  exports:[
    SidebarComponent,
    FooterComponent,
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ]
})
export class SharedModule { }
