import { Component, inject, OnInit, signal } from '@angular/core';
import { TodoService } from '../service/todo.service';
import { Todo } from '../model/todo.model';
import { catchError } from 'rxjs';
import { TodoItemsComponent } from '../todo-items/todo-items.component';
import { FormsModule } from '@angular/forms';
import { FilterTodoPipe } from '../pipes/filter-todo.pipe';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoItemsComponent, FormsModule, FilterTodoPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {

  todoService = inject(TodoService);

  todoItems = signal<Array<Todo>>([]);

  searchTerm = signal('');

  ngOnInit(): void {
      
    this.todoService.getFromApi()
    .pipe(

      catchError((err) =>{
        console.log(err);
       throw  new err;
  })
    )
    .subscribe((v) => {

      this.todoItems.set(v)
    }
    )
  }

  updateTodoItems(updateTodo : Todo){

    this.todoItems.update(to => 

      to.map(t =>

        t.id === updateTodo.id ? {...t , completed : !t.completed } : t
      )
    )
  }

}
