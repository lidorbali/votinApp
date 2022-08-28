import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['lidorbali@gmail.com', [Validators.required, Validators.email]],
      password: ['0227Lidor', [Validators.required, Validators.maxLength(6)]]
    })
  }

  ngOnInit(): void {

  }
  login() {
    console.log(this.form.value)

  }
}
