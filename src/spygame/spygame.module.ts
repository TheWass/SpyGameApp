import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PubNubAngular } from 'pubnub-angular2';

import { SpyGameRoutingModule } from './spygame.routing.module';

import { SpyGameApp } from './spygame.app';
import { NotFoundPage } from './pages/notfound/notfound.page';
import { RegisterPage } from './pages/register/register.page';
import { TemplatePage } from './pages/template/template.page';
import { LobbyPage } from './pages/lobby/lobby.page';

import { PubNubService } from './providers/pubnub/pubnub.service';
import { RegisterService } from './providers/register/register.service';
import { ParticipantsService } from './providers/participants/participants.service';

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
        TemplatePage,
        LobbyPage
    ],
    bootstrap: [
        SpyGameApp
    ],
    providers: [
        PubNubAngular,
        PubNubService,
        RegisterService,
        ParticipantsService
    ]
})
export class SpyGameModule { }
