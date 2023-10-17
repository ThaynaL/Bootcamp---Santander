import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ViewListComponent } from './view-list/view-list.component';



@NgModule({
  declarations: [
    InputComponent,
    ViewListComponent
  ],
  exports: [
    InputComponent,
    ViewListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListaModule { }
