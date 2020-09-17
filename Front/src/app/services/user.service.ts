import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { 

  }

  // private httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'text' })
  // };

  async insert(usuario) {
    try {
      const response = await this.http.post('http://localhost:3000/usuario/criar', usuario).toPromise();
      // this.globalService.presentAlert('Sucesso!', 'O contribuinte foi inserido com sucesso.');
      return response;
    } catch (error) {
      console.error('error', error);
      // this.globalService.presentAlert('Erro na comunicação com o servidor', error.message);
    }
  }

}
