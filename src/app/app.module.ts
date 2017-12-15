import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { PubNubAngular } from 'pubnub-angular2';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/notfound/notfound.component';
import { RegisterComponent } from './pages/register/register.component';
import { TemplateComponent } from './pages/template/template.component';

import { PubNubService } from './providers/pubnub/pubnub.service';
import { RegisterService } from './providers/register/register.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'template', component: TemplateComponent },
    { path: '**', component: NotFoundComponent }
  ];

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes, { enableTracing: true })
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
