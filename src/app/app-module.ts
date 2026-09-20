import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './template/header/header';
import { Footer } from './template/footer/footer';
import { Home } from './components/home/home';
import { Mcu } from './components/filmes/mcu/mcu';
import { Personagens } from './components/filmes/personagens/personagens';
import { Curiosidades } from './components/curiosidades/curiosidades';

@NgModule({
  declarations: [App, Header, Footer, Home, Mcu, Personagens, Curiosidades],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
