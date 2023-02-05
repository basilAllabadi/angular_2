import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
recipes :Recipe[]=[
new Recipe('A Test Recipe ','This is simply a test','https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2019-10-how-to-instant-pot-beef-stew%2F2019-10-21_Kitchn88948_HT-Beef-Stew')
]
constructor(){}
}
