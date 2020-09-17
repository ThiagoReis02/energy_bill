import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyacountService {

  constructor(private http: HttpClient) { }

  async salvar(usuario) {
    try {
      const resposta = this.http.post('http://localhost:3000/usuario/criar', usuario).toPromise();
      return resposta
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async listar() {
    try {
      const resposta = await this.http.get('http://localhost:3000/usuario/listar').toPromise();
      return resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async deletar(usuario) {
    try {
      const resposta = await this.http.post('http://localhost:3000/usuario/deletar', usuario).toPromise();
      return resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }

  async atualizar(usuario) {
    try {
      const resposta = await this.http.patch('http://localhost:3000/usuario/atualizar', usuario).toPromise();
      return resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }
}

