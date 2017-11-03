import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { RegisterService } from './providers/register/register.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        RegisterService
    ]
})
export class AppModule { }
