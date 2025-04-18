import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

 http = inject(HttpClient);

 getFromApi(){

  const url = 'https://jsonplaceholder.typicode.com/todos';
   
   return this.http.get<Array<Todo>>(url);
 }
}
