/**
* Routing tabla-prueba.routing.ts
*
* @author  Carlos Anchundia
* @date    2023-12-08
* @name    Routes
* @package presentation
* @subpackage tabla-prueba
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexTablaPruebaPageComponent } from './components/index-tabla-prueba-page/index-tabla-prueba-page.component';
import { CreateTablaPruebaPageComponent } from './components/create-tabla-prueba-page/create-tabla-prueba-page.component';

const routes: Routes = [
	{
		path: '', component: IndexTablaPruebaPageComponent
	},
	{
		path: ':id', component: CreateTablaPruebaPageComponent
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

export class TablaPruebaRouting { }
