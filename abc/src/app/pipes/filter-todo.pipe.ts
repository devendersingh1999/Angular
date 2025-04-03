import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterTodoPipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Todo[] {
    
    if(!searchTerm){

      return todos;
    }

    const text=searchTerm.toLowerCase();

    return todos.filter((t) =>{

      return t.title.toLowerCase().includes(text);
    })
  }

}
