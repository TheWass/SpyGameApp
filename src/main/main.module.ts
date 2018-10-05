import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MainRoutingModule } from './main.routing.module';

import { MainApp } from './main.app';
import { NotFoundPage } from './pages/notfound/notfound.page';
import { RegisterPage } from './pages/register/register.page';
import { TemplatePage } from './pages/template/template.page';
import { LobbyPage } from './pages/lobby/lobby.page';

import { GameService } from './providers/controllers/game.service';
import { ParticipantsModel } from './models/participants.model';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        MainRoutingModule,
        ReactiveFormsModule
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
        ParticipantsModel
    ],
    exports: [
    ]
})
export class MainModule { }
