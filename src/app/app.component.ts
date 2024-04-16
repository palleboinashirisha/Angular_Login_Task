import { Component, OnInit } from '@angular/core';
// import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers : [LoginService]
})
export class AppComponent implements OnInit{

  // constructor(private logindetails : LoginService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'task';

  email: any
  password: any

}