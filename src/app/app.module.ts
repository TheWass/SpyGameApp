import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { RegisterComponent } from './pages/register/register.component';

import { RegisterService } from './providers/register/register.service';

const appRoutes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
  ];

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        RegisterComponent
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        RegisterService
    ]
})
export class AppModule { }
