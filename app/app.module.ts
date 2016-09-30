import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {routing} from "./app.routing";
import {AboutComponent} from "./components/about.component";
import {DashboardComponent} from "./components/dashboard";
import {InputTextModule, InputText} from "primeng/components/inputtext/inputtext";
import {DialogModule} from "primeng/components/dialog/dialog";
import {ButtonModule} from "primeng/components/button/button";
import {LoginComponent} from "./components/login/login.component";
@NgModule({
    imports:      [ BrowserModule, routing, InputTextModule, DialogModule, ButtonModule ],
    declarations: [ AppComponent, AboutComponent, DashboardComponent,LoginComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
