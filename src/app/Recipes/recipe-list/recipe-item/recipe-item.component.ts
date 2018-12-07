import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Recipe } from "./../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.scss"]
})
export class RecipeItemComponent implements OnInit {
  // tslint:disable-next-line:semicolon
  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  serv: any;
  onSelectedItem() {
    console.log("ricetta select", this.recipe);
    this.selectedRecipe.emit(this.recipe);
    this.serv.selectedRecipe = this.recipe;
  }
  constructor() {}

  ngOnInit() {}
}
