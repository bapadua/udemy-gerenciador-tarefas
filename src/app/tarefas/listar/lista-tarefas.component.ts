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

}
