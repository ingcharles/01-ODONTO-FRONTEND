/**
* Routing tabla-prueba-uno.routing.ts
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    Routes
* @package presentation
* @subpackage tabla-prueba-uno
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTablaPruebaUnoPageComponent } from './components/index-tabla-prueba-uno-page/index-tabla-prueba-uno-page.component';
import { CreateTablaPruebaUnoPageComponent } from './components/create-tabla-prueba-uno-page/create-tabla-prueba-uno-page.component';

const routes: Routes = [
	{
		path: '', component: IndexTablaPruebaUnoPageComponent
	},
	{
		path: ':id', component: CreateTablaPruebaUnoPageComponent
	},
	{
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})

export class TablaPruebaUnoRouting { }
