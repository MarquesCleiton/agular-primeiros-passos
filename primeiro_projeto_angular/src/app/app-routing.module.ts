import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importações dos componentes
import { HomeComponent } from './home/home.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { DuvidasComponent } from './duvidas/duvidas.component';

//Inclusão de rotas de nossos componentes
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'sobre-nos', component: SobreNosComponent},
  { path: 'duvidas', component: DuvidasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }