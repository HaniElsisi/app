import { Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { CategoriesService } from './../../services/categories.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  Categories$;

  constructor(private categser : CategoriesService , private prodserv : ProductsService , private router : Router) {
    this.Categories$= categser.getCategories();
  }

  ngOnInit(): void {
  }

  save(product){
    this.prodserv.create(product);
    this.router.navigateByUrl('/admin/products');
  }
}
