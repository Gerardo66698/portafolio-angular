import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:any={};
  cargado=false;

  constructor( private http: HttpClient) {
    //console.log('Sercio Cargado');
  this.http.get('assets/data/data-pagina.json')
  .subscribe(resp => {

    this.cargado=true;
    this.info=resp;
    console.log(resp);
  });
  }
}
