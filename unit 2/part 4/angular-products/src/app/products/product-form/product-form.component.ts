import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {
  newProduct: Product;
  edit = false;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    if (!isNaN(id)) {
      this.edit = true;
      this.newProduct = this.route.snapshot.data.product;
      this.newProduct.available = this.newProduct.available.substr(0, 10);
    } else {
      this.resetForm();
    }
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
      this.newProduct.imageUrl = <string>reader.result;
    });
  }

  addProduct() {
    this.productsService.addProduct(this.newProduct).subscribe(
      prod => this.router.navigate(['/products']),
      error => console.error(error)
    );
  }

  resetForm() {
    const today = new Date();
    this.newProduct = {
      description: '',
      available: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}` +
                 `-${today.getDate().toString().padStart(2, '0')}`,
      imageUrl: '',
      price: 0,
    };
    console.log(this.fileInput.nativeElement);
    this.fileInput.nativeElement.value = '';
  }

  cancelForm() {
    this.router.navigate(['/products']);
  }

  canDeactivate(): boolean {
    return confirm('If you exit this page, unsaved data will be lost.');
  }
}
