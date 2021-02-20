import { InfoPagina } from './../interfaces/info-pagina.intreface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any []= [];

  constructor(private http: HttpClient) {
    //console.log('Sercio Cargado');
    this.CargarInfo();
    this.CargarEquipo();
  }

  private CargarInfo() {
    //leer el archivo json
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {

        this.cargada = true;
        this.info = resp;
      });
  }

  private CargarEquipo() {
    this.http.get('https://angular-html-f80e3-default-rtdb.firebaseio.com/equipo.json')
      .subscribe((resp: any) => {
        this.equipo = resp;
        console.log(resp);
      });
  }
}
