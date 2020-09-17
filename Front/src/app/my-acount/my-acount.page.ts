import { MyacountService } from './../services/myacount.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NullTemplateVisitor } from '@angular/compiler';

@Component({
  selector: 'app-my-acount',
  templateUrl: './my-acount.page.html',
  styleUrls: ['./my-acount.page.scss'],
})
export class MyAcountPage implements OnInit {


  public form: any;
  public usuarios: any;
  public usuario = {
    id_Usuario : 5,
    email: 'thiago@teste.com.br',
    nome : null,
    dt_Nascimento: null,
    senha: null,
  };

  constructor(private MyacountService: MyacountService, private fb: FormBuilder) {

      this.form = new FormGroup({
        'email': new FormControl('', [
         
        ]),
        'nome': new FormControl('', [
         
        ]),
        'senha': new FormControl('', [
      
          Validators.minLength(6),
          Validators.maxLength(18)
        ]),
        'confirmarSenha': new FormControl('', [
        
          Validators.minLength(6),
          Validators.maxLength(18)
        ]),
        'dt_Nascimento': new FormControl('', [
    
        ]),
  
  
      });
  
    }
  
    ngOnInit() {
      this.listarUsuario();
    }

    async listarUsuario() {
      try {
        const resposta = await this.MyacountService.listar();
        this.usuarios = resposta;
      } catch (erro) {
        console.error(erro.message)
      }
    }
  
    async salvar(usuario) {
      try {
        const func = (usuario.id_Usuario) ? 'atualizar' : 'salvar';
        const resposta = await this.MyacountService[func](usuario);
        this.listarUsuario();
      } catch (erro) {
        console.error(erro.message)
      }
    } 

    editar(usuario){
      this.usuario = usuario;
    }
  
    async onSubmit() {
      await this.MyacountService.salvar(this.form.value);
      this.form.reset();
    }
  }
  
  

 