import { Injectable } from '@angular/core';
import { Tarefa } from 'src/app/tarefas';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  listarTodas():Tarefa[]{
    const tarefas = localStorage['tarefas'];
    return tarefas  ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa:Tarefa):void{
    const tarefas = this.listarTodas();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number):Tarefa{
  const tarefas: Tarefa[] = this.listarTodas();
  return tarefas.find(tarefa => tarefa.id === id);
  }

  atualizar(tarefa:Tarefa):void{
    const tarefas: Tarefa[] = this.listarTodas();
    tarefas.forEach((obj, index, objs) =>{
      if(tarefa.id === obj.id){
        objs[index] = tarefa;
      }
    });
  }

  remover(id:number):void{
    let tarefas: Tarefa[] = this.listarTodas();
    tarefas = tarefas.filter( tarefa => tarefa.id !== id);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id:number):void{
    const tarefas: Tarefa[] = this.listarTodas();
    tarefas.forEach((obj, index, objs) => {
      if(id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
  }

}