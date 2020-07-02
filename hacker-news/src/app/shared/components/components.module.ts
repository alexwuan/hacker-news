import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IwaCardComponent } from './iwa-card/iwa-card.component';



@NgModule({
  declarations: [
    IwaCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IwaCardComponent
  ]
})
export class ComponentsModule { }
