import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  ricetta: Recipe = new Recipe(
    "Cacio e Peppe",
    "Lorem ipsum",
    "https://www.mangiaebevi.it/wp-content/uploads/2017/10/cacio-e-pepe-e1507299688257.jpg"
  );
  recipes: Recipe[] = [
    new Recipe(
      "Pizza",
      "Lorem ipsum",
      "https://www.bofrost.it/writable/products/images-v2/9146.jpg"
    ),
    new Recipe(
      "Chiffon Cake",
      "Lorem ipsum",
      "https://www.tasteofhome.com/wp-content/uploads/2018/05/exps164_MC163887B03_10_24b.jpg"
    ),
    new Recipe(
      "Lasagna",
      "Lorem ipsum",
      "https://sanremo.com.au/content/uploads/2017/05/San-Remo-Top-Ten-JAB_7739-1498x1000.jpg"
    )
  ];
  constructor() {}
  ingredients = {
    nome: "Aglio",
    peso: "5g"
  };
  ngOnInit() {}
}
