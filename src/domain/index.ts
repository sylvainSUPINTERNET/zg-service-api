'use strict';


import {Parkings} from "./models/Parking";
import {Products} from "./models/Product";
import {Categories} from "./models/Category";

import {ProductRepo as ProductRepository} from "./repositories/ProductRepository";


export const models = [
    Parkings,
    Products,
    Categories
];

export const repositories = {
    ProductRepository
};
