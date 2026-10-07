import { BaseModel } from "./BaseModel";
import { AddedProduct } from "./types";

export class ProductModel extends BaseModel {
        table = 'products';
        fields = ["name", "description", "price", "category", "stock_quantity", "image_url"];
}

export const productModel = new ProductModel();