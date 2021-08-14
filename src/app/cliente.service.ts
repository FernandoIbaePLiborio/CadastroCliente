import { Injectable } from '@angular/core';
import { Cliente } from './cliente/cliente';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CLIENT_API } from './app.api';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  cliente: Cliente;
  
  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente) : Observable<Cliente> {
    console.log(cliente)
    return this.http.post<Cliente>(`${CLIENT_API}/Cliente/WS/Cliente/Criar`, cliente);
  }
  
  pesquisar() : Observable<Cliente> {
    return this.http.get<Cliente>(`${CLIENT_API}/Cliente/WS/Cliente/Pesquisar`)
  } 

}
