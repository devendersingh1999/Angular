import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  http = inject(HttpClient);

  getFromApi(){

   const url= 'https://jsonplaceholder.typicode.com/todos';

   return this.http.get<Array<Todo>>(url);

  }
}

// this is the way to add multiple api's
// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private apiUrl = 'https://api.example.com/users';

// http = inject(HttpClient);

//   getUsers() {
//     return this.http.get(this.apiUrl);
//   }
// }
// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
//   private apiUrl2 = 'https://api.example.com/products';

//   http = inject(HttpClient);

//   getProducts() {
//     return this.http.get(this.apiUrl2);
//   }
// }