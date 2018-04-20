import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterPage } from './pages/register/register.page';
import { TemplatePage } from './pages/template/template.page';
import { NotFoundPage } from './pages/notfound/notfound.page';

const spyRoutes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: RegisterPage },
    { path: 'template', component: TemplatePage },
    { path: '**', component: NotFoundPage }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(spyRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class SpyGameRoutingModule { }