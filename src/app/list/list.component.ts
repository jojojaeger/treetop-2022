import { Component, OnInit } from '@angular/core';
import { TreeTopComponent } from '../shared/component';
import { ComponentsService } from '../shared/components-service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  list: TreeTopComponent[];


  constructor(private cs: ComponentsService) {
  }

  ngOnInit(): void {
    this.list = this.cs.getItems();
  }
}
