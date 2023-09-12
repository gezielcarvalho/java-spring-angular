import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AddCategoryModalComponent } from './screens/category/add-category-modal/add-category-modal.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryComponent } from './screens/category/category.component';
import { CategoryDetailComponent } from './screens/category/category-detail/category-detail.component';
import { CategoryItemComponent } from './screens/category/category-list/category-item/category-item.component';
import { CategoryListComponent } from './screens/category/category-list/category-list.component';
import { CategoryToolbarComponent } from './screens/category/category-toolbar/category-toolbar.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './screens/home/home.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { SidebarComponent } from './components/header/sidebar/sidebar.component';
import { SidebarIconComponent } from './components/header/sidebar/sidebar-icon/sidebar-icon.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';

@NgModule({
  declarations: [
    AddCategoryModalComponent,
    AppComponent,
    CategoryComponent,
    CategoryDetailComponent,
    CategoryItemComponent,
    CategoryListComponent,
    CategoryToolbarComponent,
    HomeComponent,
    HeaderComponent,
    LogoComponent,
    NavigationComponent,
    SidebarComponent,
    SidebarIconComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
  ],
  imports: [AppRoutingModule, BrowserModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
