import {NgModule} from '@angular/core';
import {CategoriesMenuComponent} from './categories-menu.component';
import {AsyncPipe, NgForOf} from "@angular/common";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    AsyncPipe,
    MatOptionModule,
    MatSelectModule,
    NgForOf,
    MatMenuModule,
    MatButtonModule
  ],
  declarations: [CategoriesMenuComponent],
  providers: [],
  exports: [CategoriesMenuComponent]
})
export class CategoriesMenuComponentModule {
}
