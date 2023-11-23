import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../model/model';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  
  
 
  id: number;
  product!: Product;
  isLoading: boolean = true;
  isUpdate: boolean = false;

  constructor(
    private data: DataService,
    private activateRoute: ActivatedRoute,
    private router: Router){
    this.id = activateRoute.snapshot.params['id'];
  
  }

  ngOnInit(): void {

    this.data.Type = "";
    this.isLoading = true;
    const id = +this.activateRoute.snapshot.params['id']!;
    this.data.getProduct(id).subscribe(data => {
      this.product = data;
      this.isLoading = false;
    });
       
  }

  showDetail(): void {
    this.isUpdate = true;
  }

  updateProduct(): void {
    this.data.updateProduct(this.product);
    this.router.navigate(['']);
  }

  deleteProduct(): void {
    this.data.deleteProduct(this.product.id!).subscribe(() => {
      this.router.navigate(['']);
    })
  } 

  



     
}


