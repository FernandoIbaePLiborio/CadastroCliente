import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaskDirective, NgxMaskModule } from 'ngx-mask';
import { ClienteService } from 'src/app/cliente.service';
import { Alert } from 'src/app/shared/alert/alert.model';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  lettersAndNumbers = /^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$/
  clienteForm: FormGroup
  cliente: Cliente
  success: boolean
  message: string
  alerta: Alert

  constructor(private service: ClienteService, private router: Router, private formBuilder: FormBuilder) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    this.clienteForm = this.formBuilder.group({
      nome: this.formBuilder.control('', [Validators.pattern('^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$'), Validators.required, Validators.minLength(4)]),
      cpf: this.formBuilder.control('', [Validators.required]),
      telefone: this.formBuilder.control('', [Validators.required])
    })
  }

  salvar(cliente: Cliente) {
    this.service.salvar(cliente).subscribe(
      response => {
        this.success = response.ok
        this.message = response.mensagem
        if (this.success) {
          this.clienteForm.reset()
        }
      }, error => {
        this.success = false
        this.message = error
      }
    )
  }

  alertaSucessoErro() {
    return this.alerta = this.success ? 
        { mensagem: "Cliente Salvo com Sucesso!", classeAlerta: "alert alert-success" } 
        : { mensagem: this.message, classeAlerta: "alert alert-danger" }
  }

  voltar() {
    this.router.navigate(['/clientes'])
  }

}
