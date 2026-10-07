import { db } from "../(config)/db_config";
import { AddedProduct } from "./types";

export abstract class BaseModel {
    abstract table: string
    abstract fields: string[]
    values:(string | number | undefined)[] = [];
    query = "";

    getAll() {
        this.values = [];
        this.query = `SELECT * FROM ${this.table}`
        return this;
    }

     run() {
        if (this.values.length === 0) {
            return  db.query(this.query);
        }
        return db.query(this.query, this.values);
    }

    add(data: AddedProduct) {
        this.values = [data.name, data.description, data.price, data.category, data.stock_quantity, data.image_url];
        this.query = `INSERT INTO ${this.table} (${this.fields}) VALUES($1, $2, $3, $4, $5, $6)`;
        return this;
    }

    update(id:number, data:AddedProduct) {
        this.values = [data.name, data.description, data.price, data.category, data.stock_quantity, data.image_url, data.created_at, id];

        this.query = `UPDATE ${this.table} SET name=$1, description=$2, price=$3, category=$4, stock_quantity=$5, image_url=$6 created_at = $7 
        WHERE id=$8 RETURNING *`;
        return this;
    }

    delete(id: number) {
        this.values = [Number(id)];
        this.query = `DELETE FROM ${this.table} WHERE id = $1 RETURNING *`;
        return this;
    }

}
