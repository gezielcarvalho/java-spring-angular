import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { ModalComponent } from './components/header/modal/modal.component';
import { NavigationComponent } from './components/header/navigation/navigation.component';
import { SidebarComponent } from './components/header/sidebar/sidebar.component';
import { SidebarIconComponent } from './components/header/sidebar/sidebar-icon/sidebar-icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CategoryItemComponent } from './screens/category/category-list/category-item/category-item.component';
import { CategoryListComponent } from './screens/category/category-list/category-list.component';
import { CategoryComponent } from './screens/category/category.component';
import { CategoryDetailComponent } from './screens/category/category-detail/category-detail.component';
import { CategoryToolbarComponent } from './screens/category/category-toolbar/category-toolbar.component';
import { AddCategoryModalComponent } from './screens/category/add-category-modal/add-category-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CategoryItemComponent,
    CategoryListComponent,
    CategoryComponent,
    LogoComponent,
    ModalComponent,
    NavigationComponent,
    SidebarComponent,
    SidebarIconComponent,
    CategoryDetailComponent,
    CategoryToolbarComponent,
    AddCategoryModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
