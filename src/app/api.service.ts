import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Livro } from './model/livro';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:4200/api/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  InsertLivro(livro:Livro)
  {  
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Livro[]>(apiUrl, livro, httpOptions);  
  }  

  GetAllLivros():Observable<Livro[]>  
  { 
   return this.http.get<Livro[]>(apiUrl);
  }  

  DeleteLivroById(id:string):Observable<number>  
  {   
   return this.http.get<number>(apiUrl + '?id='+id);  
  }  

  GetLivrosById(id:string)  
  {  
   return this.http.get<Livro>(apiUrl + '?id=' + id);  
  }  

  UpdateLivro(livro:Livro)  
  { 
   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Livro[]>(apiUrl,livro, httpOptions);  
  } 

}
