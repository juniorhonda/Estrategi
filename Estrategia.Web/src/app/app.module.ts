import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaDetalheComponent } from './views/pessoa-detalhe/pessoa-detalhe.component';
import { PessoaListaComponent } from './views/pessoa-lista/pessoa-lista.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { NgxViacepModule } from "@brunoc/ngx-viacep"; // Importando o módulo
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PessoaDetalheComponent,
    PessoaListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMaskModule.forRoot(),
    HttpClientModule,
    NgxViacepModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
