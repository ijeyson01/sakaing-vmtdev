import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { HttpService } from '../../services/http.service';
import { Product } from '../../interfaces/product.interface';
import { DialogModule } from 'primeng/dialog';
import { TextareaModule } from 'primeng/textarea';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { Category } from '../../interfaces/category.interface';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProductService } from '../../services/product.service';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-product',
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    IconFieldModule,
    InputIconModule,
    RatingModule,
    FormsModule,
    TagModule,
    InputTextModule,
    DialogModule,
    TextareaModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputNumberModule,
    SelectModule,
    ConfirmDialogModule
  ],
  providers: [
    HttpService
  ],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  
  productService = inject(ProductService);
  
  httpService = inject(HttpService);

  brandService = inject(BrandService);

  changeDetector = inject(ChangeDetectorRef);

  productList: Product[] = [];

  productCategoryList: any[] = [];

  brandList: any[] = [];

  selectedBrand: any = null;

  showProductDialog: boolean = false;
  selectedCategory: any = {
    label: '',
    value: 0
  };
  newProduct: any = {
    
  };
  
  ngOnInit(): void {
    this.getProductoByService();
    this.getCategoriesByService();
    this.getBrands();
    this.changeDetector.detectChanges();
  }

  openNewProduct() {
    this.showProductDialog = true;
  }

  getProductoByService(){
    this.productService.getProducts().subscribe({
      next: (values) => {
        this.productList.push(...values.data as Product[])
      },
      error: (error) => {

      },
      complete: () => {
        console.log('Fin de proceso de consulta de productos');
      }
    })
  }

  getCategoriesByService() {
    this.httpService.getCategories(1).subscribe({
      next: (values) => {
        let dataValue: any[] = values.data as any[];
          dataValue.forEach( data => {
            this.productCategoryList.push({ label: data.categoria, value: data.categoria_id });
          })
      } 
    })
  }

  getBrands() {
    this.brandService.getBrands().subscribe({
      next: (values) => {
        let dataValue: any[] = values.data as any[];
          dataValue.forEach( data => {
            this.brandList.push({ label: data.marca_descrip, value: data.marca_id });
          })
      }
    })
  }

  selectCategoryEvent(category: Category) {
    console.log(category);
  }

  processSelection(){
    console.log(this.selectedCategory);
  }
}
