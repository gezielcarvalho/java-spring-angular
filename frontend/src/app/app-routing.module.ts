import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './screens/category/category.component';
import { HomeComponent } from './screens/home/home.component';
import { ProductComponent } from './screens/product/product.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { ItemsComponent } from './screens/items/items.component';
import { ItemDetailsComponent } from './screens/items/item-list/item-details/item-details.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'categories',
    component: CategoryComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'items/:id',
    component: ItemDetailsComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
