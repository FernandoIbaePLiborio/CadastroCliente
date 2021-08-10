import { Injectable } from '@angular/core';
import { Cliente } from './cliente/cliente';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteColecao } from './cliente/clienteColecao';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  cliente: Cliente;
  clientes: ClienteColecao[];

  constructor(private http: HttpClient) { }

  salvar(cliente: Cliente) : Observable<Cliente> {
    console.log(cliente)
    return this.http.post<Cliente>('http://localhost:8081/Cliente-0.0.1/WS/Cliente/Criar', cliente);
  }
  
  pesquisar() : Observable<Cliente> {
    return this.http.get<Cliente>('http://localhost:8081/Cliente-0.0.1/WS/Cliente/Pesquisar')
  } 

}
