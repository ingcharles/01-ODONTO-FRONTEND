import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { DxDataGridModule } from 'devextreme-angular';




@NgModule({
  declarations: [
    FileUploaderComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule
  ],
  exports: [
    FileUploaderComponent
  ]

})
export class SharedModule { }
