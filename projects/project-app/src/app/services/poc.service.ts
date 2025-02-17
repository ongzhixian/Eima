import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PocService {

  constructor(private http: HttpClient  ) { }

  callHelloLambdaFunction () {
    return this.http.get('https://xi6jnoidqxvnmnczpex6z3gche0ucvbi.lambda-url.us-east-1.on.aws/', {responseType: 'text'});
  }
}
