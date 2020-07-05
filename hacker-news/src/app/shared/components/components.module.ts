import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IwaCardComponent } from './iwa-card/iwa-card.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    IwaCardComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    IwaCardComponent
  ]
})
export class ComponentsModule { }
