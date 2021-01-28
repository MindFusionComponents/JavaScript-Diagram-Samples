import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Anchors} from './Anchors';
import {FractalLayout} from './FractalLayout';
import {Inheritance} from './Inheritance';
import {MinApp} from './MinApp';


const routes: Routes = [
  {path: '', redirectTo: '/minapp', pathMatch: 'full'},
  {path: 'anchors', component: Anchors},
  {path: 'fractallayout', component: FractalLayout},
  {path: 'inheritance', component: Inheritance},
  {path: 'minapp', component: MinApp}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents = [Anchors, FractalLayout, Inheritance, MinApp];
