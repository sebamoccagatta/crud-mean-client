import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

const routes: Routes = [ 
  {
    path: '',
    component: ListarProductosComponent
  },
  {
    path: 'create-product',
    component: CrearProductoComponent
  },
  {
    path: 'edit-product/:id',
    component: CrearProductoComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
