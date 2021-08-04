import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresComponent } from './pages/proveedores/proveedores.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { CabezaTablaComponent } from './components/cabeza-tabla/cabeza-tabla.component';
import { CuerpoTablaComponent } from './components/cuerpo-tabla/cuerpo-tabla.component';



@NgModule({
  declarations: [ProveedoresComponent, PedidosComponent, BusquedaComponent, CabezaTablaComponent, CuerpoTablaComponent],
  imports: [
    CommonModule
  ]
})
export class SuministrosModule { }
