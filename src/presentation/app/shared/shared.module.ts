import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { DevextremeModule } from '../devextreme/devextreme.module';
// import { CneSelectBoxComponent } from 'src/helpers/components/cne-select-box/cne-select-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CneListAnexosComponent } from './components/cne-list-anexos/cne-list-anexos.component';
import { CneAnexosPdfComponent } from './components/cne-anexos-pdf/cne-anexos-pdf.component';
// import { SweetAlert2Module } from 'sweetalert2';



@NgModule({
    declarations: [
        // CneSelectBoxComponent,
        CneAnexosPdfComponent,
        CneListAnexosComponent

    ],
    imports: [
        CommonModule,
        // DevextremeModule,
        ReactiveFormsModule,
        // SweetAlert2Module.forRoot()

    ],
    providers: [

    ],
    exports: [
        // CneSelectBoxComponent,
        CneAnexosPdfComponent,
        CneListAnexosComponent

    ],
    bootstrap: []
})
export class SharedModule { }
