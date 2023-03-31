import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shop',
    loadChildren: () => import("./modules/shop/shop.module").then(m => m.ShopModule)
  },
  {
    path: 'search',
    loadChildren: () => import("./modules/search/search.module").then(m => m.SearchModule)
  },
  {
    path: 'cart',
    loadChildren: () => import("./modules/cart/cart.module").then(m => m.CartModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import("./modules/favorite/favorite.module").then(m => m.FavoriteModule)
  },
  {
    path: 'account',
    loadChildren: () => import("./modules/account/account.module").then(m => m.AccountModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
