import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {CategoriesCheckboxComponent} from './categories-checkbox.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  imports: [CommonModule, MatCardModule, MatCheckboxModule],
  declarations: [CategoriesCheckboxComponent],
  providers: [],
  exports: [CategoriesCheckboxComponent]
})
export class CategoriesCheckboxComponentModule {
}
