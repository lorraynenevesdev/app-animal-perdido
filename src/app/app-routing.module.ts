import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroAnimaisPerdidosComponent } from './cadastro-animais-perdidos/cadastro-animais-perdidos.component';
import { ListaAnimaisPerdidosComponent } from './lista-animais-perdidos/lista-animais-perdidos.component';
import { UpdateAnimaisPerdidosComponent } from './update-animais-perdidos/update-animais-perdidos.component';


const routes: Routes = [
  {path: 'cadastro-animais-perdidos' , component: CadastroAnimaisPerdidosComponent},
  {path: 'lista-animais-perdidos' , component: ListaAnimaisPerdidosComponent},
  {path: 'edicao-animais-perdidos/:id' , component: UpdateAnimaisPerdidosComponent},
  {path: '' , component: ListaAnimaisPerdidosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
