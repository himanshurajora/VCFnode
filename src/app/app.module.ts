import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemComponent } from './item/item.component';


import { from } from 'rxjs';
import { MaterialModule } from './meterial-module';
import { NavbarComponent } from './navbar/navbar.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms'
import { DatashareService } from './shared/services/datashare.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NavbarComponent,
    ContainerComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    DatashareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
