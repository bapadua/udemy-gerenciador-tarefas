import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
   this.tarefas = this.listarTodas();
  }

  listarTodas(): Tarefa[]{
    return this.tarefaService.listarTodas();
  }

  remover($event: any, tarefa:Tarefa):void{
    $event.preventDefault();
    if(confirm('Deseja remover esta tarefa?"'+ tarefa.nome +'"?')){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodas();
    }
  }

  alterarStatus(tarefa:Tarefa):void{
    if(confirm('Deseja alterar o status da tarefa "'+ tarefa.nome +'"')){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodas();
    }
  }

}
