import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [ProductComponent, ProductsListComponent],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [ProductsListComponent],
})
export class ProductsModule {}
