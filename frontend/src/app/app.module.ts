import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryModule } from './components/category/category.module';
import { CalendarModule } from './components/calendar/calendar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CategoryModule, CalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
