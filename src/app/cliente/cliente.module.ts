import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    ClienteFormComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    NgxMaskModule.forChild()
  ],
  exports: [
    ClienteFormComponent,
    ClientesComponent
  ]
})
export class ClienteModule { }
