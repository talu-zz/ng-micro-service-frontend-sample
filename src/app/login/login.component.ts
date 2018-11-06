import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private user = { name: "", password: '' }

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.loginService.login(this.user.name, this.user.password);
  }

}
