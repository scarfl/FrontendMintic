import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificarmodelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  datosUsuarioEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar);
  constructor(private http: HttpClient) {
      this.VeficarSesion();


   }


  VeficarSesion(){
    let datos = this.ObtenerInformacion();
    if(datos){
      this.RefrescarDatos(datos);
    }
  }





  RefrescarDatos(datos : ModeloIdentificar){
    this.datosUsuarioEnSesion.next(datos);
  }





  ObtenerDatosUsuario(){
    return this.datosUsuarioEnSesion.asObservable()
  }
   Identificar(usuario:string, clave: string): Observable<ModeloIdentificar>{
     return this.http.post("http://localhost:3000/identificarPersona",{ //string template url
      usuario : usuario,
      clave : clave
    },{




    headers : new HttpHeaders({

    })
  })

   }

   AlmacenarDatos(datos: ModeloIdentificar){
    datos.estaIdentificado = true;
    let datosconvertidos= JSON.stringify(datos);
    localStorage.setItem("datosSesion",datosconvertidos)  
    this.RefrescarDatos(datos)
   }






   ObtenerInformacion(){
     let datosString = localStorage.getItem("datosSesion");
     if(datosString){
       let datos = JSON.parse(datosString);
       return datos;
     } else{
       return null;
     }
   }





   EliminarInformacion(){
    localStorage.removeItem("datosSesion");
    this.RefrescarDatos(new ModeloIdentificar());

   }

   

}



