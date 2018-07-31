import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
  new Recipe('A test Recipe', 'This is simply a test',
  'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29-1500x1125.jpg'),
  new Recipe('Another test Recipe', 'This is simply a test',
  'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29-1500x1125.jpg')
];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
      }


}
