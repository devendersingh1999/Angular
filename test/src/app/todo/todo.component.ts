import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from '../model/todo.model';
import { catchError } from 'rxjs';
import { TodoItemsComponent } from '../todo-items/todo-items.component';
import { FormsModule } from '@angular/forms';
import { FilterItemPipe } from '../pipes/filter-item.pipe';

@Component({
  selector: 'app-todo',
  imports: [TodoItemsComponent, FormsModule , FilterItemPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit{

  todoService = inject(TodoService);

  todoItems = signal<Array<Todo>>([]);

  searchTerm = signal('');

  ngOnInit(): void {
      
    this.todoService.getFromApi()

    .pipe(

      catchError((err) =>{

        console.log(err);
        throw new err;
      })
    )
    .subscribe((t) =>{

      this.todoItems.set(t);
    })
  }

  updateTodoItems(updateTodo : Todo) {

    this.todoItems.update(todo => 

      todo.map(t => 

       t.id === updateTodo.id ? {... t , completed : !t.completed } : t 
      )
    )
  } 

  
 
}
