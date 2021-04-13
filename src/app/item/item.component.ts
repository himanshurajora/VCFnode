import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../shared/services/datashare.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  data = "This is the data i am gonna show up there";
  username = "";
  constructor(public datashare : DatashareService) { }

  ngOnInit(): void {
    this.username = this.datashare.username;
  }

}
