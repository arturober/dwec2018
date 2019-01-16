import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CanComponentDeactivate } from '../../guards/can-deactivate.guard';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmModalComponent } from 'src/app/modals/confirm-modal/confirm-modal.component';
import { from, Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate {
  newProduct: Product;
  edit = false;
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('formProd') formProd: NgForm;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private modalService: NgbModal
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

  canDeactivate(): Observable<boolean> {
    if (this.formProd.dirty && this.formProd.valid) {
      const modalRef = this.modalService.open(ConfirmModalComponent);
      modalRef.componentInstance.title = 'Save changes';
      modalRef.componentInstance.body  = 'If you leave this page, all changes will be lost. Do you want to save changes?';

      return from(modalRef.result).pipe(
        switchMap(resp => {
          if (resp) {
            return this.productsService.addProduct(this.newProduct).pipe(
              map(p => true),
              catchError(e => {
                alert('Error saving product!');
                return of(false);
              })
            );
          } else {
            return of(true);
          }
        }),
        catchError(e => of(false))
      );
    }

    return of(true);
  }
}
