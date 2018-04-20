import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PubNubAngular } from 'pubnub-angular2';

import { SpyGameRoutingModule } from './spygame.routing.module';

import { SpyGameApp } from './spygame.app';
import { NotFoundPage } from './pages/notfound/notfound.page';
import { RegisterPage } from './pages/register/register.page';
import { TemplatePage } from './pages/template/template.page';

import { PubNubService } from './providers/pubnub/pubnub.service';
import { RegisterService } from './providers/register/register.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        SpyGameRoutingModule
    ],
    declarations: [
        SpyGameApp,
        NotFoundPage,
        RegisterPage,
        TemplatePage
    ],
    bootstrap: [
        SpyGameApp
    ],
    providers: [
        PubNubAngular,
        PubNubService,
        RegisterService
    ]
})
export class SpyGameModule { }
