import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TreeTopComponent } from '../shared/component';
import { ComponentsService } from '../shared/components-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  componentsForm: FormGroup;
  list: TreeTopComponent[];
  c: TreeTopComponent = { id: 1, title: "", description: "" }

  constructor(private cs: ComponentsService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.list = this.cs.getItems();
    console.log(this.list)
    this.componentsForm = this.fb.group({
      title: this.c.title,
      desc: this.c.description,
      component: TreeTopComponent,
    });
  }

  submitForm() {

    if (this.componentsForm.value.component != null) {
      this.c = new TreeTopComponent(this.cs.list.length + 1, this.componentsForm.value.component.title, this.componentsForm.value.component.desc)

    }
    else {
      this.c = new TreeTopComponent(this.cs.list.length + 1, this.componentsForm.value.title, this.componentsForm.value.desc)
    }
    this.cs.addToList(this.c)
    this.router.navigate(['../list'])

  }

}
