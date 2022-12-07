import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {CategoriesListComponent} from './categories-list.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [MatCardModule, CommonModule, MatListModule],
  declarations: [CategoriesListComponent],
  providers: [],
  exports: [CategoriesListComponent]
})
export class CategoriesListComponentModule {
}
