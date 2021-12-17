import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPersonaComponent } from './Personas/crear-persona/crear-persona.component';

const routes: Routes = [
   {
    path: 'crear-empleado',
    component : CrearPersonaComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
