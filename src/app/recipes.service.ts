import { Injectable } from "@angular/core";
import { Recipe } from "./Recipes/recipe-list/recipe.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  URL = "https://themealdb.com/api/json/v1/1/search.php?s=cake";

  selectedRecipe: Recipe = null;
  changedSelectedRecipe(ricette: Recipe) {
    console.log("changedSelectedRecipe", ricette);
    this.selectedRecipe = ricette;
  }

  constructor(private http: HttpClient) {}

  searchRecipes() {
    const response = this.http
      .get(this.URL)
      .toPromise()
      .then(recipes => {
        console.log("ricette ricevute", recipes);
      })
      .catch(err => {
        console.error("ERRORE!!!", err);
      });
  }
}
