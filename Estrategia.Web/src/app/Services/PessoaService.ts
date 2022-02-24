import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from '../../environments/environment'

@Injectable({
    providedIn: 'root',
})
export class PessoaService {
    private pessoaUrl = `${environment.baseUrl}/pessoa`;

    constructor(
        private http: HttpClient,
    ) { }


    // POST /pessoa
    create(pessoa: any): Observable<any> {
        return this.http
            .post<any>(this.pessoaUrl, pessoa)
    }

    // POST /pessoa
    salvar(pessoa: any): Observable<any> {
        return this.http
            .patch<any>(this.pessoaUrl, pessoa)
    }

    // GET /pessoa/id
    getOne(id: number): Observable<any> {
        return this.http
            .get<any>(`${this.pessoaUrl}/${id}`);
    }

    // GET /pessoa
    getAll(): Observable<any[]> {
        return this.http
            .get<any[]>(this.pessoaUrl);
    }

    // GET /pessoa/id
    delete(pessoa: any): Observable<any> {
        return this.http.put<any>(`${this.pessoaUrl}`, pessoa)
    }
}
