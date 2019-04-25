import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Add, CountState } from './app.state';

@Component({
  selector: 'my-app',
  template: `
  <button (click)="onAdd()">Click Me</button>
    <ul>Count is
    <li *ngFor="let testCount of count$ | async"> 
    {{testCount}} 
    <button (click)="onDelete(testCount)">X</button>
    </li>
    </ul>
  `
})
export class AppComponent  {

  @Select(CountState) count$: Observable<any>;

  constructor(private store: Store) {}

  onAdd() {
    this.store.dispatch(new Add());
  }

  onDelete($event) {
    console.log($event);
    this.store.dispatch(new Delete());
  }
  
}
