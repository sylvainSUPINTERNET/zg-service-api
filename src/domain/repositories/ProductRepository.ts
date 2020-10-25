import {Products} from "../models/Product";
import {Model} from "sequelize";
import BaseRepository from "./BaseRepository";


class ProductRepository extends BaseRepository{

    private model;

    public constructor (model: Model) {
        super();
        this.model = model;
    }

     getAll(){
        return this.model.findAll();
    }

    getById( id: string ) {
        return this.model.findByPk(id)
    }

}

export const ProductRepo = new ProductRepository(Products);
