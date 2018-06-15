import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MainRoutingModule } from './main.routing.module';

import { MainApp } from './main.app';
import { NotFoundPage } from './pages/notfound/notfound.page';
import { RegisterPage } from './pages/register/register.page';
import { TemplatePage } from './pages/template/template.page';
import { LobbyPage } from './pages/lobby/lobby.page';

import { GameService, Game } from './providers/model/game.service';
import { ParticipantsService } from './providers/model/participants.service';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        MainRoutingModule
    ],
    declarations: [
        MainApp,
        NotFoundPage,
        RegisterPage,
        TemplatePage,
        LobbyPage
    ],
    bootstrap: [
        MainApp
    ],
    providers: [
        GameService,
        ParticipantsService
    ],
    exports: [
    ]
})
export class MainModule { }
