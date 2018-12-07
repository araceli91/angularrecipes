import { RecipesService } from "./recipes.service";
import { Recipe } from "./Recipes/recipe-list/recipe.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  selectedRecipe: Recipe = null;
  onSelectedRecipe(recipe) {
    console.log("Ricetta ricevuta dal Nonno", recipe);
    this.selectedRecipe = recipe;
  }

  constructor(private serv: RecipesService) {}

  ngOnInit() {
    this.serv.searchRecipes();
  }
}
