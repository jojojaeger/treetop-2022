import { Injectable } from "@angular/core";
import { TreeTopComponent } from "./component";
import components from '../shared/component-factory.json';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  list: TreeTopComponent[] = components

  addToList(product: TreeTopComponent) {
    this.list.push(product);
  }

  getItems() {
    return this.list;
  }

  getItem(id: number) {
    return this.list.find(c => c.id === id);
  }

}