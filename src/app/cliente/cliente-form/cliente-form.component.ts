import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MaskDirective, NgxMaskModule } from 'ngx-mask';
import { ClienteService } from 'src/app/cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  clienteForm: FormGroup
  cliente: Cliente
  success: boolean
  message: string
  lettersAndNumbers = /^[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ ]+$/

  constructor(private service : ClienteService, private router : Router, private formBuilder: FormBuilder) {
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
    console.log(cliente)
    this.service.salvar(cliente).subscribe(response => {
        console.log(response)
        this.success = response.ok
        this.message = response.mensagem
        this.clienteForm.reset()
      }, error => {
        console.log(error)
        this.success = false
        this.message = error
      }
    )
  }

  voltar() {
    this.router.navigate(['/clientes'])
  }

}
