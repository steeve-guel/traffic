import { Routes } from '@angular/router';
import { UserTrafficGestionComponent } from './utilisateur/user-traffic-gestion/user-traffic-gestion.component';
import path from 'path';
import { AcceuilComponent } from './utilisateur/acceuil/acceuil.component';
import { ItineraireComponent } from './utilisateur/itineraire/itineraire.component';

export const routes: Routes = [
  { path: '', redirectTo: 'user-trafic-gestion', pathMatch: 'full' },
  {
    path: 'user-trafic-gestion', component: UserTrafficGestionComponent, children: [
      { path: 'acceuil', component: AcceuilComponent },
      { path: 'itineraire', component: ItineraireComponent },
      { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
    ]
  }
];
