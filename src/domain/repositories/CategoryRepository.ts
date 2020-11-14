import {Categories} from "../models/Category";

import {Model} from "sequelize";
import BaseRepository from "./BaseRepository";
import staticCategories from "../../config/staticData/staticCategories";


class CategoryRepository extends BaseRepository{

    private model;

    public constructor (model: Model) {
        super();
        this.model = model;
    }

     getAll(){
        return this.model.findAll({});
    }

    getAllStatic(){
        return staticCategories
    }

}

export const CategoryRepo = new CategoryRepository(Categories);
