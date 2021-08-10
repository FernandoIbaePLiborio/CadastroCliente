import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from '../cliente';
import { ClienteColecao } from '../clienteColecao';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: ClienteColecao[];
  constructor(private service: ClienteService, private router: Router) { }


  ngOnInit(): void {
    this.service.pesquisar()
      .subscribe(response => {
        this.clientes = response.colecao;
        console.log(response)
      }, error => console.log(error))
  }
 
  async myMethod(){
    let data = await this.service.pesquisar();
    console.log(data);
   }

  cadastro() {
    this.router.navigate(['/cliente-form'])
  }

}
