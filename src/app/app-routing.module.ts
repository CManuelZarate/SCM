import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPrincipalComponent } from './suministros/pages/menu-principal/menu-principal.component';
import { PedidosComponent } from './suministros/pages/pedidos/pedidos.component';
import { ProveedoresComponent } from './suministros/pages/proveedores/proveedores.component';
import { InicioComponent } from './usuario/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',component: InicioComponent
  },
  {
    path:'menuPrincipal',component: MenuPrincipalComponent
  },
  {
    path:'pedidos',component: PedidosComponent
  },
  {
    path:'proveedores',component: ProveedoresComponent
  },
  {
    path:'**',
    redirectTo:''
    /*component:404component */
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
