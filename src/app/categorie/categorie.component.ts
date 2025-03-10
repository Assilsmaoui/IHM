import { Component, OnInit } from '@angular/core';
import { Categorie } from 'Model/Categorie';
import { CategorieService } from 'Service/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{
  categories: Categorie[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.loading = true;
    this.categorieService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
        this.loading = false;
      },
      error: (error) => {
        this.errorMessage = 'Erreur de chargement des catégories';
        console.error(error);
        this.loading = false;
      }
    });
  }
}