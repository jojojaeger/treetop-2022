import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { DetailsViewComponent } from "./details-view/details-view.component";
import { FormComponent } from './form/form.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListComponent },
  { path: 'list/:id', component: DetailsViewComponent },
  { path: 'new', component: FormComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

