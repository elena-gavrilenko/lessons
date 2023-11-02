import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { GetCarComponent } from './get-car/get-car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsListComponent,
    GetCarComponent,
    AddCarComponent,
    DeleteCarComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
