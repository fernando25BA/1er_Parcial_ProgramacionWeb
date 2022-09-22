import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { TituloComponent } from './titulo/titulo.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { ContenidoMedio1Component } from './contenido-medio1/contenido-medio1.component';
import { CntenidoMedio2Component } from './cntenido-medio2/cntenido-medio2.component';
import { ContenidoComponent } from './contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    TituloComponent,
    PiePaginaComponent,
    ContenidoMedio1Component,
    CntenidoMedio2Component,
    ContenidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
