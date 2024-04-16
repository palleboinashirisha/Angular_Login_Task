import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  userDetail = [
    {email : 'abc@gmail.com', password:'sirisha'},
    {email:'palleboinashirisha2002@gmail.com',password:'abcd'}
  ]
}
