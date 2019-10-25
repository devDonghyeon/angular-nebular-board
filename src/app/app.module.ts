import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule} from '@nebular/theme';
import { Demo2Component } from './demo2/demo2.component';
import { OnewayComponent } from './bind/oneway/oneway.component';
import { TwowayComponent } from './bind/twoway/twoway.component';
import {FormsModule} from '@angular/forms';
import { NgClassComponent } from './directive/ng-class/ng-class.component';
import { NgIfComponent } from './directive/ng-if/ng-if.component';
import { NgForComponent } from './directive/ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component,
    OnewayComponent,
    TwowayComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }