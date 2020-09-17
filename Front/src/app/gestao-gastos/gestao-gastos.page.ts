import { GestaoGastosService } from './../services/gestao-gastos.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-gestao-gastos',
  templateUrl: './gestao-gastos.page.html',
  styleUrls: ['./gestao-gastos.page.scss'],
})
export class GestaoGastosPage implements OnInit {

  public gestaoGastos: [];
  public form: any;
  public formdelete: any;
  public gestao : any;
  public gestao2 = {
    id_GastoMensal: null,
    valor: null,
    mes: null
  };


  constructor(public GestaoGastosService: GestaoGastosService, private fb: FormBuilder) {

    this.formdelete = new FormGroup({
      'id_GastoMensal': new FormControl('', [

      ]),

    });

    this.form = new FormGroup({
      'date': new FormControl('', [

      ]),
      'valor': new FormControl('', [

      ]),
    });
  }


  async ngOnInit() {
    const response: any = await this.GestaoGastosService.getWithBalance();
    this.gestaoGastos = response;
  }

  async onSubmit() {
    await this.GestaoGastosService.insert(this.form.value);
    this.form.reset();
  }

  async deletar(){
    await this.GestaoGastosService.deletar(this.formdelete.value);
   // this.listargestaoGastos();
  }

  /*async deletar(){
     try{
       const resposta = await this.GestaoGastosService.deletar(this.gestaoGastos);
       return resposta
      //this.listargestaoGastos();
     } catch(erro){
       console.error(erro.message);
     }
   }*/
 
   async listargestaoGastos(){
     try{
       const resposta = await this.GestaoGastosService.listar();
       this.gestao = resposta
     } catch(erro){
       console.error(erro.message);
     }
 
   }

   editar(gestaoGastos){
    this.gestaoGastos = gestaoGastos;
  }

  async salvar(gestao2) {
    try {
      const funcao = (gestao2.id_GastoMensal) ? 'atualizar' : 'salvar';
      const resposta = await this.GestaoGastosService[funcao](gestao2);
      return resposta;
    } catch (erro) {
      console.error(erro.message)
    }
  } 

}
