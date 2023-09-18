import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';




@NgModule({
  declarations: [
    FileUploaderComponent
  ],
  imports: [
    CommonModule,

  ],
  exports: [
    FileUploaderComponent,
    DxDataGridModule,
    DxButtonModule
  ]

})
export class SharedModule { }
