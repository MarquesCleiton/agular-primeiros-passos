import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AppRoutingModule } from './app-routing.module';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DuvidasComponent } from './duvidas/duvidas.component';


@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    HomeComponent,
    RodapeComponent,
    SobreNosComponent,
    DuvidasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
