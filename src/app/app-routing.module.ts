import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DemoComponent} from './demo/demo.component';
import {Demo2Component} from './demo2/demo2.component';
import {OnewayComponent} from './bind/oneway/oneway.component';
import {TwowayComponent} from './bind/twoway/twoway.component';
import {NgClassComponent} from './directive/ng-class/ng-class.component';
import {NgIfComponent} from './directive/ng-if/ng-if.component';
import {NgForComponent} from './directive/ng-for/ng-for.component';

const routes: Routes = [
  {path: 'demo', component: DemoComponent},
  {path: 'demo2', component: Demo2Component},
  {path: 'oneway', component: OnewayComponent},
  {path: 'twoway', component: TwowayComponent},
  {path: 'ngClass', component: NgClassComponent},
  {path: 'ngIf', component: NgIfComponent},
  {path: 'ngFor', component: NgForComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }