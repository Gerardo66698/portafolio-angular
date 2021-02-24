import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  productos: Producto[] = [];
  cargando = true;
  productoFiltardo: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }


  private cargarProductos() {

    return new Promise<void>((resolve, reject) => {
      this.http.get('https://angular-html-f80e3-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp: any) => {
          this.productos = resp;
          console.log(resp);

          //setTimeout(() => {
          this.cargando = false;
          resolve();
          //}, 2000);
        });

    });


  }

  getProducto(id: string) {
    return this.http.get(`https://angular-html-f80e3-default-rtdb.firebaseio.com/prductos/${id}.json`);
  }

  buscarProducto(termino: string) {
    if (this.productos.length === 0) {
      //cargamos productos
      this.cargarProductos().then(() => {
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos(termino);
      })
    } else {
      //aplicar filtro
      this.filtrarProductos(termino);
    }


    console.log(this.productoFiltardo);
  }

  private filtrarProductos(termino: string) {
    console.log(this.productos);
    this.productoFiltardo=[];

    termino=termino.toLowerCase();

    this.productos.forEach(prod => {
      const tituloLower=prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino)>=0) {
        this.productoFiltardo.push(prod);
      }
    })
    /*  this.productoFiltardo = this.productos.filter(producto => {
        return true;
      });*/
  }
}
