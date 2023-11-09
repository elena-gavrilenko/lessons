import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCarComponent } from './add-car/add-car.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarComponent } from './car/car.component';


const routes: Routes = [
  {path: "",component: CarsListComponent},
  {path: "cars",component:CarsListComponent},
  {path: "cars:/id", component:CarComponent},
  {path:"add", component: AddCarComponent},
  // {path:"car", component: CarComponent}, вместо этого третья строчка
  {path: "**", redirectTo: ""}
// redirect переправляет в корень
];
//  в path прописывается коренной маршрут
// **- любая последовательность  если стоит вначале, то больше никуда не попасть
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
