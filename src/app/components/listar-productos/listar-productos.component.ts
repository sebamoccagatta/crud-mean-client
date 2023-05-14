import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProduct: Producto[] = [];

  constructor(private _productService: ProductoService){
  }

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts(){
    this._productService.showProducts().subscribe(data => {
      console.log(data);
      this.listProduct = data;
    }, error => {
      console.log(error);
    })
  }
}
