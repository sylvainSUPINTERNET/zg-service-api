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
        return this.model.findAll({offset: 0, limit:5});
    }

    getById( id: string ) {
        return this.model.findByPk(id, {include: ["Category"] })
    }

}

export const ProductRepo = new ProductRepository(Products);
