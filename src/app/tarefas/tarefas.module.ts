import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaTarefasComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TarefaService } from './shared';
import { CadastrarTarefaComponent } from './cadastro';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule  
  ],
  declarations: [
    ListaTarefasComponent, 
    CadastrarTarefaComponent
  ],
  exports:[ListaTarefasComponent],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
