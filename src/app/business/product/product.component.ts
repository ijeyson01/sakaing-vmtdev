import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
    InputTextModule
  ],
  providers: [
    HttpService
  ],
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent implements OnInit {
  
  httpService = inject(HttpService);
  
  ngOnInit(): void {
    
    this.httpService.getProducts().subscribe({
      next: (values) => {
        console.log(JSON.stringify(values));
      },
      error: (error) => {

      },
      complete: () => {
        console.log('Fin de proceso de consulta de productos');
      }
    })
  }

}
