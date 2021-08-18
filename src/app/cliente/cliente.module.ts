import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';
import { NgxMaskModule } from 'ngx-mask';
import { InputComponent } from '../shared/input/input.component';
import { AlertComponent } from '../shared/alert/alert.component';


@NgModule({
  declarations: [
    ClienteFormComponent,
    ClientesComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ],
  exports: [
    ClienteFormComponent,
    ClientesComponent,
    InputComponent,
    ReactiveFormsModule,
    AlertComponent
  ]
})
export class ClienteModule { }
