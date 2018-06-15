import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { SpyGameRoutingModule } from './spygame.routing.module';

import { SpyGameApp } from './pages/spygame.app';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        SpyGameRoutingModule
    ],
    declarations: [
        SpyGameApp
    ],
    bootstrap: [
        SpyGameApp
    ],
    providers: [
    ]
})
export class SpyGameModule { }
