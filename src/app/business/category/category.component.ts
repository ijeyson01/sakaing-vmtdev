import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-category',
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
  templateUrl: './category.component.html',
  styles: ``
})
export class CategoryComponent {

}
