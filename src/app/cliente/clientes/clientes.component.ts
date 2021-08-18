import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente.service';
import { ClienteColecao } from '../clienteColecao.model';

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
      }, error => console.log(error))
  }
 
  async myMethod(){
    let data = await this.service.pesquisar();
   }

  cadastro() {
    this.router.navigate(['/cliente-form'])
  }

}
