import { Component, inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'Model/Categorie';
import { CategorieService } from 'Service/categorie.service';

@Component({
  selector: 'app-ajoutcategorie',
  templateUrl: './ajoutcategorie.component.html',
  styleUrls: ['./ajoutcategorie.component.css']
})
export class ajoutcategorieComponent implements OnInit {
  
  categorie: Categorie = { nomcat: '' }; 
  nomCatControl = new FormControl('', Validators.required);

  private categorieService = inject(CategorieService);
  private router = inject(Router);

  constructor() {}

  ngOnInit(): void {}

  ajouterCategorie(): void {
    if (this.nomCatControl.valid) {
      this.categorieService.ajouterCategorie(this.categorie).subscribe({
        next: () => {
          console.log('Catégorie ajoutée avec succès');
          this.router.navigate(['/Categorie']); // 🔹 Redirection après ajout
        },
        error: (err) => console.error('Erreur lors de l’ajout', err),
      });
    }
  }
}
