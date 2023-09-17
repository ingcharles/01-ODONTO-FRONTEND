import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioPageComponent } from './components/calendario-page/calendario-page.component';
const routes: Routes = [
  {
    path: '', component: CalendarioPageComponent
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
export class CalendarioRouting { }

