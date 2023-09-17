import { TratamientoModule } from './tratamiento.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTratramientoPageComponent } from './components/index-tratramiento-page/index-tratramiento-page.component';
import { CreateTratramientoPageComponent } from './components/create-tratramiento-page/create-tratramiento-page.component';

const routes: Routes = [
  {
    path: '', component: IndexTratramientoPageComponent
  },
  {
    path: ':id', component: CreateTratramientoPageComponent
  },


  {
    path: '**',
    redirectTo: '',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TratamientoRouting { }
