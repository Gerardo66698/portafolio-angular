import { InfoPaginaService } from './services/info-pagina.service';
import { Component } from '@angular/core';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  constructor(public infoPagina: InfoPaginaService, public productosService: ProductosService){}
}
