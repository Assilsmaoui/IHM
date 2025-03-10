import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ajoutcategorieComponent } from './ajoutcategorie/ajoutcategorie.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },{
    path:'user',
    pathMatch:'full',
    component:UtilisateurComponent
  },
    {
     path:'Ajoutcategorie',
     pathMatch:'full',
     component:ajoutcategorieComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
