import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  cliente: Cliente;

  success: boolean;
  message: string;
  constructor(private service : ClienteService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void { }

  onSubmit() {
    this.service.salvar(this.cliente)
      .subscribe(response => {
        console.log(response);
        if(response.ok) {
          this.success = response.ok;
          this.message = response.mensagem;
        } else {
          this.success = response.ok;
          this.message = response.mensagem;
        }
      }, error => {
        console.log(error)
        this.message = error;
      }
    )
  }

}
