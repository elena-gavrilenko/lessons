import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Location } from '@angular/common';
// import { ProductList } from './model/repository';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'goods-store';
  searchString = '';
  

  constructor (private data:DataService, private router: Router, private location: Location) {
  }

  search(): void {
    this.data.getProducts().subscribe((data) => {
      let id;
      data.forEach((element) => {
        if (element.name == this.searchString) {
          id = element.id;
        }
      });
    
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['product', id]);
 
    });
  }

  
  
}
