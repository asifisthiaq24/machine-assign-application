import { Component } from '@angular/core';
import { GlobalVariablesService } from './global-variables.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ GlobalVariablesService ]
})

export class AppComponent {
  title = 'ComponentTestingA8';
  loggedUserName:any = '';
  constructor(private _gvs:GlobalVariablesService){

  }
  ngOnInit(){
    this.loggedUserName = this._gvs.getLoggedUserName()
  }
  newName(){
    if(this._gvs.getLoggedUserName() == 'Welcome, Isthiaq'){
      this._gvs.setLoggedUserName('Welcome, Asif')
      this.loggedUserName = this._gvs.getLoggedUserName()
    }
    else{
      this._gvs.setLoggedUserName('Welcome, Isthiaq')
      this.loggedUserName = this._gvs.getLoggedUserName()
    }

  }
}
