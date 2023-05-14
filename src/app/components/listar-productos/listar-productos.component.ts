import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProduct: Producto[] = [];

  constructor(private _productService: ProductoService, private toastr: ToastrService){
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

  deleteProduct(id: any){
    this._productService.deleteProduct(id).subscribe(data => {
      this.toastr.error('El producto fue eliminado con exito', 'Producto Eliminado');
      this.showProducts();
    }, error => {
      console.log(error);
    })
  }
}
