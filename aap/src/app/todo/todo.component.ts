import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { catchError } from 'rxjs';
import { Todo } from '../Model/todo.model';
import { TodoItemsComponent } from '../todo-items/todo-items.component';

@Component({
  selector: 'app-todo',
  standalone:true,
  imports: [TodoItemsComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {

  todoService = inject(TodoService);

  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
      
    this.todoService.getFromApi()

      .pipe(
        catchError((err) => {
          console.log(err);
          throw new err;
        })
      )

      .subscribe((t) => {

        this.todoItems.set(t);
      }
      )
    
  }
}
