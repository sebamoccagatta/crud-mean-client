import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  formProduct: FormGroup

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private productService: ProductoService) {
    this.formProduct = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      locate: ['', Validators.required],
      price: ['', Validators.required],
    })
  }

  addProduct(){
    const product : Producto = {
      name: this.formProduct.get('product')?.value,
      category:  this.formProduct.get('category')?.value,
      locate:  this.formProduct.get('locate')?.value,
      price:  this.formProduct.get('price')?.value
    }

    console.log(product);

    this.productService.saveProduct(product).subscribe(data => {
    this.toastr.success('El producto fue registrado con exito!', 'Producto Registrado!');
    this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.formProduct.reset();
      
    })
    

  }

}
