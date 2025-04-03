import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo.model';

@Pipe({
  name: 'filterItem'
})
export class FilterItemPipe implements PipeTransform {

  transform(todos: Todo[], searchTerm: string): Todo[] {
   
    if(!searchTerm){

      return todos; 
    }

    const text = searchTerm.toLowerCase();

    return todos.filter((t) =>{

      return t.title.toLowerCase().includes(text);
    })
   
    
  }
}

// Without case sensitive

// transform(todos: Todo[], searchTerm: string): Todo[] {
//   if (!searchTerm) return todos;

//   // Function to normalize text: Remove spaces & special characters, convert to lowercase
//   const normalize = (text: string) => 
//     text.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/gi, '');

//   const text = normalize(searchTerm); // Normalize the search term

//   return todos.filter((t) => normalize(t.title).includes(text));
// }
