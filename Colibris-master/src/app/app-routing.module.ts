
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RecherchesComponent } from './recherches/recherches.component';
import { RequetesComponent } from './requetes/requetes.component';
import { SeriesComponent } from './series/series.component';
import { ParametresComponent } from './parametres/parametres.component';
import { UtilisateursComponent } from './utilisateurs/utilisateurs.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { Erreur404Component } from './erreur404/erreur404.component';

const routes: Routes = [
    {path: '', component:LoginComponent},
    {path: 'recherches', component:RecherchesComponent},
    {path: 'requetes', component:RequetesComponent},
    {path: 'series', component:SeriesComponent},
    {path: 'utilisateurs', component:UtilisateursComponent},
    {path: 'statistiques', component:StatistiquesComponent},    
    {path: 'parametres', component:ParametresComponent},
    {path: '**', component:Erreur404Component}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }

