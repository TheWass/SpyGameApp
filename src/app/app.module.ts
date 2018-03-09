import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PubNubAngular } from 'pubnub-angular2';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { RegisterComponent } from './pages/register/register.component';
import { TemplateComponent } from './pages/template/template.component';

import { PubNubService } from './providers/pubnub/pubnub.service';
import { RegisterService } from './providers/register/register.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        RegisterComponent,
        TemplateComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        PubNubAngular,
        PubNubService,
        RegisterService
    ]
})
export class AppModule { }
