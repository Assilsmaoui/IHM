import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { provideFirestore } from '@angular/fire/firestore';
import { getAuth } from '@angular/fire/auth';
import { getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { CategorieComponent } from './categorie/categorie.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ajoutcategorieComponent } from './ajoutcategorie/ajoutcategorie.component';

// 🔹 Importation des modules Angular Material nécessaires
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), // ✅ Initialisation Firebase
    provideAuth(() => getAuth()), // ✅ Authentification Firebase
    provideFirestore(() => getFirestore()), // Init Firestore

    // 🔹 Ajout des modules Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CategorieComponent,
    UtilisateurComponent,
    ajoutcategorieComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
