import { Component, input, output } from '@angular/core';
import { Todo } from '../Model/todo.model';
import { HighLightTodoDirective } from '../Directive/high-light-todo.directive';

@Component({
  selector: 'app-todo-items',
  standalone:true,
  imports: [HighLightTodoDirective],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {

  tod= input.required<Todo>();

  todoToggled = output<Todo>();

  todoClick(){

    this.todoToggled.emit(this.tod());
  }
}
