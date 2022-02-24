import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../../Services/PessoaService'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {
  pessoasData: any;
  constructor(private pessoaService: PessoaService
    , private router: Router) { }

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas() {
    this.pessoaService.getAll()
      .subscribe((res) => {
        console.log(res);
        this.pessoasData = res;
      })
  }

  alterar(id: number) {
    this.router.navigate(['Detalhe/', id]);
  }

  excluir(pessoa: any) {
    return Swal.fire({
      title: 'Exluir!',
      text: "Deseja excluir esse registro?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.pessoaService.delete(pessoa)
          .subscribe((res) => {
            Swal.fire(
              'Sucesso!',
              'Excluído com sucesso!',
              'success'
            )
            this.getPessoas();
          })
      }
    })
  }
}
