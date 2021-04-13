import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../shared/services/datashare.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  theme = "red";
  username = "";
  data = [
    {title:'a'},
    {title:'b'},
    {title:'c'}
  ];
  current : any = null;
  constructor(private datashare : DatashareService) { 
    
  }


  log(){
    console.log(this.theme);
  }

  ngOnInit(): void {
    this.username = this.datashare.username;
  }

  select(d: any){
    this.current = d;
  }
  
}
