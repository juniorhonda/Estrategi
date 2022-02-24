import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../../Services/PessoaService'
import { Location } from '@angular/common';
import { NgxViacepService } from "@brunoc/ngx-viacep"; // Importando o serviço
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pessoa-detalhe',
  templateUrl: './pessoa-detalhe.component.html',
  styleUrls: ['./pessoa-detalhe.component.css']
})
export class PessoaDetalheComponent implements OnInit {
  pessoa: any;
  loading = false;

  constructor(private route: ActivatedRoute
    , private pessoaService: PessoaService
    , private location: Location
    , private viacep: NgxViacepService
    , private router: Router) { }


  ngOnInit(): void {
    this.pessoa = {};
    this.pessoa.id = this.route.snapshot.paramMap.get('id');
    if (this.pessoa.id != '0') {
      this.getPessoa(Number(this.pessoa.id));
    }

    console.log(this.pessoa.id);
  }

  criar(): void {
    this.loading = true;
    this.pessoaService.create(this.pessoa).subscribe(() => {
      Swal.fire('Sucesso!', 'Criado com sucesso', 'success');
      this.router.navigate(['']);
    },
      err => {
        Swal.fire('Erro!', err.error, 'error');
        this.loading = false;
      }
    )

  }

  salvar(): void {
    this.loading = true;
    this.pessoaService.salvar(this.pessoa).subscribe(() => {
      Swal.fire('Sucesso!', 'Alterado com sucesso', 'success');
      this.router.navigate(['']);
    },
      err => {
        Swal.fire('Erro!', err.error, 'error');
        this.loading = false;
      })
  }

  voltar(): void {
    this.location.back();
  }

  getPessoa(id: number): void {
    this.pessoaService.getOne(id).subscribe((pessoa) => {
      this.pessoa = pessoa;
      console.log(pessoa);
    });
  }

  consultarCEP(): void {
    this.viacep.buscarPorCep(this.pessoa.cep).subscribe(
      respose => {
        this.pessoa.logradouro = respose.logradouro;
        this.pessoa.estado = respose.uf;
        this.pessoa.cidade = respose.localidade;
        console.log(respose)
      },
      err => {
        Swal.fire('Erro!', 'CEP não encontrado', 'error');
        this.pessoa.cep = "";
        this.pessoa.logradouro = "";
        this.pessoa.estado = "";
        this.pessoa.cidade = "";
      }
    )
  }
}
