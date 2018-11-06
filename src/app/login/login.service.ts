import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = 'https://api.github.com';
  private token = '';
  constructor(private http: HttpClient) { }

  login(user: string, pwd: string) {
    this.http
      .get(this.url, {
        headers: { 'Authorization': 'Basic ' + this.getBase64EncodedString(user, pwd) },
        observe: 'response'
      })
      .pipe(map((response: HttpResponse<string>) => {
        if (response.status == 200) {
          this.token = this.getBase64EncodedString(user, pwd);
        }
      }));
  }

  getToken(): string {
    return this.token;
  }

  getBase64EncodedString(user: string, pwd: string): string {
    return btoa(user + ':' + pwd);
  }
}
