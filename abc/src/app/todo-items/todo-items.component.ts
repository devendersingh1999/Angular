import { Component, input, output } from '@angular/core';
import { Todo } from '../model/todo.model';
import { HighlighterTodoDirective } from '../directive/highlighter-todo.directive';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [HighlighterTodoDirective],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.scss'
})
export class TodoItemsComponent {

  tod = input.required<Todo>();

  todoToggled = output<Todo>();

  todoClick(){

    this.todoToggled.emit((this.tod()));
  }
}

