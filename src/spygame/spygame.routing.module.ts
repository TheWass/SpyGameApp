import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { TemplateComponent } from './pages/template/template.component';
import { NotFoundComponent } from './pages/notfound/notfound.component';

const spyRoutes: Routes = [
    { path: '', redirectTo: 'register', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'template', component: TemplateComponent },
    { path: '**', component: NotFoundComponent }
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