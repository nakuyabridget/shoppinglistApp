import { Recipe } from './recipe.model';

export class RecipeService {
   private recipes: Recipe[] = [
        new Recipe('A test Recipe', 'This is simply a test',
        'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29-1500x1125.jpg'),
        new Recipe('Another test Recipe', 'This is simply a test',
        'https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29-1500x1125.jpg')
      ];

      getRecipe() {
          return this.recipes.slice();
      }
 }
