import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  loginMessage:String = '';
  username:string='';
  password:String='';
  __users:any;
  loginMessageBol:Boolean=false;
  welcomeMsg:any='';
  message:string;

  constructor(private http:HttpClient,private router: Router) { }
  ngOnInit() { 
  }
  logIn(){
    let resp_post = this.http.post('https://nodejs-mongo-server-asif.herokuapp.com/login/',{"username":this.username,"password":this.password})
    resp_post.subscribe((data:any)=>{
      this.loginMessage = data.message;
      if(this.loginMessage == 'Login successful.'){
        localStorage.setItem('accessToken',data.accessToken);
        localStorage.setItem('refreshToken',data.refreshToken);
        localStorage.setItem('uid',data.id);
        localStorage.setItem('uname',this.username);
        this.router.navigate(['/home']);
      }
      else{
        this.loginMessageBol=true;
      }
      console.log(data)
    })
  }
}