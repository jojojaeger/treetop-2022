import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DeclarationWithTypeParameters } from 'typescript';
import { TreeTopComponent } from '../shared/component';
import { ComponentsService } from '../shared/components-service';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css']
})
export class DetailsViewComponent implements OnInit {

  component: TreeTopComponent | undefined


  constructor(private route: ActivatedRoute, private cs: ComponentsService) {
    this.component = this.cs.getItem(Number(this.route.snapshot.params.id))
  }

  ngOnInit(): void {

  }

}
