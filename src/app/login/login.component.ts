import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
// import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   constructor( private route : Router, private service : LoginService) { }

  ngOnInit(): void {
   
  }
    username: string = '';
    password: string = ''

    // Two Way Data Binding...
  
    // onSubmit() {
    //   // console.log(this.username)
    //   // our login validation logic here
    //   if (this.username === 'palleboinashirisha2002@gmail.com' && this.password === 'sirisha') {
    //      // Redirect or perform other actions
    //     this.route.navigate(['/home'])
       
    //    } 
    //   else {
    //     this.route.navigate(['/error'])
    //     // Handle error, display message, etc.
    //   }
    // }

    // Services Approach
    validateDetails(username : string, password:string){
     return this.service.userDetail.find(user=>user.email===username && user.password===password)

    }
    onSubmit(){
      if(this.validateDetails(this.username,this.password)){
        this.route.navigate(['/home'])
      }
      else{
        this.route.navigate(['/error'])
      }
      
    }
  }


