import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {ProductTableComponent} from './product-table.component';
import {MatListModule} from "@angular/material/list";

@NgModule({
  imports: [MatTableModule, MatCardModule, CommonModule, MatListModule],
  declarations: [ProductTableComponent],
  providers: [],
  exports: [ProductTableComponent]
})
export class ProductTableComponentModule {
}
