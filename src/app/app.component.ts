import { Component } from '@angular/core';
import { OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[  ]
})

export class AppComponent {


  title = 'Machine Assign App';
  constructor(private titleService: Title){

  }
  ngOnInit(){
    this.setTitle('Machine Assign App')
  }
  setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
