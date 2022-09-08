import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as comp from './components/component';



@NgModule({
  declarations: [comp.AllComponent],
  imports: [
  CommonModule
  ],
  exports:[
    comp.AllComponent
  ]

})
export class SharedModule { }
