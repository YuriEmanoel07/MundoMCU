import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Mcu } from './components/filmes/mcu/mcu';
import { Personagens } from './components/filmes/personagens/personagens';
import { Curiosidades } from './components/curiosidades/curiosidades';

const routes: Routes = [
  {path: '',component: Home},
  {path: 'Filmes', component: Mcu},
  {path: 'Filmes/Personagens', component: Personagens},
  {path: 'Curiosidades', component: Curiosidades}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
