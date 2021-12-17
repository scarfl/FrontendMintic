import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { EliminarPersonaComponent } from './Personas/eliminar-persona/eliminar-persona.component';
import { CrearPersonaComponent } from './Personas/crear-persona/crear-persona.component';
import { ActualizarPersonaComponent } from './Personas/actualizar-persona/actualizar-persona.component';
import { EditarPersonaComponent } from './Personas/editar-persona/editar-persona.component';
import { BuscarPersonaComponent } from './Personas/buscar-persona/buscar-persona.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';


@NgModule({
  declarations: [
    EliminarPersonaComponent,
    CrearPersonaComponent,
    ActualizarPersonaComponent,
    EditarPersonaComponent,
    BuscarPersonaComponent,
    CrearProductoComponent,
    BuscarProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
