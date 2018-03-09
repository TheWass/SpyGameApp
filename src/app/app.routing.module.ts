import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppModule } from './app.module';
import { RegisterComponent } from './pages/register/register.component';
import { TemplateComponent } from './pages/template/template.component';
import { NotFoundComponent } from './pages/notfound/notfound.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'template', component: TemplateComponent },
    { path: '**', component: NotFoundComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forChild(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})
export class AppRoutingModule { }