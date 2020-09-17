import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class GestaoGastosService {

  constructor(private http: HttpClient) { }
  async insert(gestaoGastos) {
    try {
      const response = await this.http.post('http://localhost:3000/gastoMensal/criar', gestaoGastos).toPromise();
      // this.globalService.presentAlert('Sucesso!', 'O contribuinte foi inserido com sucesso.');
      return response;
    } catch (error) {
      console.error('error', error);
      // this.globalService.presentAlert('Erro na comunicação com o servidor', error.message);
    }
  }

  async deletar(gestaoGastos){
    try{
      const response = await this.http.post('http://localhost:3000/gastoMensal/deletar', gestaoGastos).toPromise();
      return response;
    }catch(error){
      console.error('error', error);
    }
  }
  async listar(){
    try{
      const response = await this.http.get('http://localhost:3000/gastoMensal/deletar').toPromise();
      return response;
    }catch(error){
      console.error('error', error);
    }
  }

  async getWithBalance(gestaoGastos){
    try{
      const response = await this.http.get('http://localhost:3000/gastoMensal/listar', gestaoGastos).toPromise();
      return response;
    }catch (error){
      console.error('error',error);
    };
  }

  async atualizar(gestaoGastos) {
    try {
      const resposta = await this.http.patch('http://localhost:3000/gastoMensal/atualizar', gestaoGastos).toPromise();
      return resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  }
 
}
