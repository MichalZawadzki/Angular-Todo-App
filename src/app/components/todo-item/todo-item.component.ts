import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  setClasses(){
    let classes = {
      'list-group-item-success': this.todo.completed
    }
    return classes;
  }

  onToggle(todo){
    console.log("toggle");
    // todo.completed = !todo.completed

    this.todoService.toggleCompleted(todo).subscribe((todo: any) => {
      console.log(todo);
    })
  }

  onDelete(todo){
    console.log("delete");
    this.deleteTodo.emit(todo);
  }

}
