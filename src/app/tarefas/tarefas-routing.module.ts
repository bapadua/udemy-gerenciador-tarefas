import { Routes } from "@angular/router";
import { ListaTarefasComponent } from "./listar";
import { CadastrarTarefaComponent } from "./cadastro";
import { EditarTarefaComponent } from "./editar";

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListaTarefasComponent
    },
    {
        path: 'cadastrar',
        redirectTo: 'tarefas/cadastrar'
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefaComponent
    }
];