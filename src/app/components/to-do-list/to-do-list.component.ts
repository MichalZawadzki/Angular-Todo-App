import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {
  todos:Todo[];

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodoList().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo: Todo){
    this.todos = this.todos.filter(t=>t.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }
}
