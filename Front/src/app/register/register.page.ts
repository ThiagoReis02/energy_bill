import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public form: any;

  constructor(private fb: FormBuilder, public userService: UserService) {
    this.form = new FormGroup({
      'email': new FormControl('', [
        Validators.required
      ]),
      'nome': new FormControl('', [
        Validators.required,

      ]),
      'senha': new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18)
      ]),
      'confirmarSenha': new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(18)
      ]),
      'dt_Nascimento': new FormControl('', [
        Validators.required
      ]),


    });

  }

  ngOnInit() {
  }

  async onSubmit() {
    await this.userService.insert(this.form.value);
    this.form.reset();
  }
}
