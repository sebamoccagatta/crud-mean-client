import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  formProduct: FormGroup
  title = 'Crear Producto';
  id: string | null;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private productService: ProductoService, route: ActivatedRoute) {
    this.formProduct = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      locate: ['', Validators.required],
      price: ['', Validators.required],
    })
    this.id = route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.isEdit();
  }

  addProduct() {
    const product: Producto = {
      name: this.formProduct.get('product')?.value,
      category: this.formProduct.get('category')?.value,
      locate: this.formProduct.get('locate')?.value,
      price: this.formProduct.get('price')?.value
    }

    if (this.id !== null) {
      // edit product

      this.productService.editProduct(this.id, product).subscribe(data => {
        this.toastr.info('El producto fue editado con exito!', 'Producto Editado!');
        this.router.navigate(['/products']);
      }, error => {
        console.log(error);
        this.formProduct.reset();
      })
    }
    else {
      // add product
      console.log(product);

      this.productService.createProduct(product).subscribe(data => {
        this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
        this.router.navigate(['/products']);
      }, error => {
        console.log(error);
        this.formProduct.reset();
      })
    }
  }

  isEdit() {
    if (this.id !== null) {
      this.title = 'Editar Producto';
      this.productService.showProduct(this.id).subscribe(data => {
        this.formProduct.setValue({
          product: data.name,
          category: data.category,
          locate: data.locate,
          price: data.price,
        })
      })
    }
  }
}
