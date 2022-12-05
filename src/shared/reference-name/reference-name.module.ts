import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceNamePipe } from './reference-name.pipe';



@NgModule({
  declarations: [
    ReferenceNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReferenceNamePipe
  ]
})
export class ReferenceNameModule { }
