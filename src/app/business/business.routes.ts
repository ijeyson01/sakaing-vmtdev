import { Routes } from "@angular/router";
import { ProductComponent } from "./product/product.component";
import { CategoryComponent } from "./category/category.component";

export default [
    { path: 'products', component: ProductComponent },
    { path: 'category', component: CategoryComponent}
] as Routes;