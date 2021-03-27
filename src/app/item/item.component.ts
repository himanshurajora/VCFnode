import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  data = "This is the data i am gonna show up there";

  constructor() { }

  ngOnInit(): void {
  }

}
