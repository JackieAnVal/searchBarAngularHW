import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/comunes/encabezado/encabezado.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ConsolasComponent } from './componentes/consolas/consolas.component';
import { APP_ROUTING } from './app.routes';
import { InfoconsolaComponent } from './componentes/infoconsola/infoconsola.component';
import { JuegosconsolaComponent } from './componentes/juegosconsola/juegosconsola.component';
import { JuegoComponent } from './componentes/juego/juego.component';
import { ConsolasService } from './servicios/consolas.service';
import { ResconsolasComponent } from './componentes/buscador/resconsolas/resconsolas.component';
import { ResjuegosComponent } from './componentes/buscador/resjuegos/resjuegos.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PrincipalComponent,
    AcercadeComponent,
    ConsolasComponent,
    InfoconsolaComponent,
    JuegosconsolaComponent,
    JuegoComponent,
    ResconsolasComponent,
    ResjuegosComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    ConsolasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
