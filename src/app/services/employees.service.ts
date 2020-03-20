import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  getPost(id: string){
    return this.http.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
  }
  getPosts(){
   return this.http.get('http://jsonplaceholder.typicode.com/posts')
  }
}
