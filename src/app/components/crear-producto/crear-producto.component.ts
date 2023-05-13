import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent {
  formProduct: FormGroup

  constructor(private fb: FormBuilder) {
    this.formProduct = this.fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      locate: ['', Validators.required],
      price: ['', Validators.required],
    })
  }

  addProduct(){
    console.log(this.formProduct);
    
  }

}
