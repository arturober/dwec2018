import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  newProduct: Product;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
    this.resetForm();
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
    this.add.emit(this.newProduct);
    this.cancel.emit();
    this.resetForm();
  }

  resetForm() {
    const today = new Date();
    this.newProduct = {
      description: '',
      id: -1,
      available: `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}` +
                 `-${today.getDate().toString().padStart(2, '0')}`,
      imageUrl: '',
      price: 0,
      rating: 0
    };
  }

  cancelForm() {
    this.resetForm();
    this.cancel.emit();
  }

}
