import { Component, input, output } from '@angular/core';
import { HighLightTodoDirective } from '../directive/high-light-todo.directive';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [HighLightTodoDirective],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css'
})
export class TodoItemsComponent {

  tod = input.required<Todo>();

  todoToggled = output<Todo>();

  todoClick(){

    this.todoToggled.emit(this.tod());
  }

}
