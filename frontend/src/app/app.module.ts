import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { CategoryComponent } from './screens/category/category.component';
import { CategoryDetailComponent } from './screens/category/category-detail/category-detail.component';
import { CategoryItemComponent } from './screens/category/category-list/category-item/category-item.component';
import { CategoryListComponent } from './screens/category/category-list/category-list.component';
import { CategoryModalComponent } from './screens/category/category-modal/category-modal.component';
import { CategoryToolbarComponent } from './screens/category/category-toolbar/category-toolbar.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginButtonComponent } from './components/header/navigation/login-button/login-button.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { PageNotFoundComponent } from './screens/page-not-found/page-not-found.component';
import { ProductComponent } from './screens/product/product.component';
import { ProductListComponent } from './screens/product/product-list/product-list.component';
import { ProductToolbarComponent } from './screens/product/product-toolbar/product-toolbar.component';
import { ProductItemComponent } from './screens/product/product-list/product-item/product-item.component';
import { SidebarComponent } from './components/header/sidebar/sidebar.component';
import { SidebarIconComponent } from './components/header/sidebar/sidebar-icon/sidebar-icon.component';
import { UnlessDirective } from './directives/unless.directive';
import { UserDropdownComponent } from './components/header/navigation/user-dropdown/user-dropdown.component';
import { ItemsComponent } from './screens/items/items.component';
import { ItemToolbarComponent } from './screens/items/item-toolbar/item-toolbar.component';
import { ItemListComponent } from './screens/items/item-list/item-list.component';
import { ItemItemComponent } from './screens/items/item-list/item-item/item-item.component';
import { ItemDetailsComponent } from './screens/items/item-list/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    CategoryComponent,
    CategoryDetailComponent,
    CategoryItemComponent,
    CategoryListComponent,
    CategoryModalComponent,
    CategoryToolbarComponent,
    ClickOutsideDirective,
    HeaderComponent,
    HomeComponent,
    LoginButtonComponent,
    LogoComponent,
    NavigationComponent,
    SidebarComponent,
    SidebarIconComponent,
    UnlessDirective,
    UserDropdownComponent,
    ProductComponent,
    ProductListComponent,
    ProductToolbarComponent,
    ProductItemComponent,
    PageNotFoundComponent,
    ItemsComponent,
    ItemToolbarComponent,
    ItemListComponent,
    ItemItemComponent,
    ItemDetailsComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
