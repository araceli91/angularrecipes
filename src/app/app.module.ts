import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeListComponent } from "./Recipes/recipe-list/recipe-list.component";
import { RecipeItemComponent } from "./Recipes/recipe-list/recipe-item/recipe-item.component";
import { LikeComponent } from "./like/like.component";
import { RecipeDetailsComponent } from "./Recipes/recipe-details/recipe-details.component";
import { RecipesService } from "./recipes.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    LikeComponent,
    RecipeDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
