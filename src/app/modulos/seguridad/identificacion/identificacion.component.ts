import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as crypto from 'crypto-js';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgValidador : FormGroup = this.fb.group({
    'usuario' : ['',[Validators.required, Validators.email]],
    'clave' : ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router : Router) {

   }

  ngOnInit(): void {

  }
 
  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = crypto.MD5(clave).toString();
    this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any) => {
     this.servicioSeguridad.AlmacenarDatos(datos);
      this.router.navigate(['/inicio'])
      //OK
      alert("Los datos ingresados son correctos")
      this.servicioSeguridad.AlmacenarDatos(datos)
    }, (error: any) => {
      alert("No se encuentra el usuario o la contraseña")
    }
    )}
}
