import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PubNubAngular } from 'pubnub-angular2';

import { SpyGameRoutingModule } from './spygame.routing.module';

import { SpyGameComponent } from './spygame.component';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { RegisterComponent } from './pages/register/register.component';
import { TemplateComponent } from './pages/template/template.component';

import { PubNubService } from './providers/pubnub/pubnub.service';
import { RegisterService } from './providers/register/register.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        SpyGameRoutingModule
    ],
    declarations: [
        SpyGameComponent,
        NotFoundComponent,
        RegisterComponent,
        TemplateComponent
    ],
    bootstrap: [
        SpyGameComponent
    ],
    providers: [
        PubNubAngular,
        PubNubService,
        RegisterService
    ]
})
export class SpyGameModule { }
