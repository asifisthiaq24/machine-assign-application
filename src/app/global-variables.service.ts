import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariablesService {
  loggedUser:any = 'Welcome, Asif'
  constructor() { }
  getLoggedUserName(){
    return this.loggedUser;
  }
  setLoggedUserName(str:any){
    this.loggedUser = str
  }
}
