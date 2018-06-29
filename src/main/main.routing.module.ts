import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterPage } from './pages/register/register.page';
import { NotFoundPage } from './pages/notfound/notfound.page';
import { LobbyPage } from './pages/lobby/lobby.page';

const routes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: RegisterPage },
    { path: 'lobby', component: LobbyPage },
    { path: '**', component: NotFoundPage }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class MainRoutingModule { }