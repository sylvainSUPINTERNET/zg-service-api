'use strict';

import {sequelize} from "../db/DbConnection";
import {Sequelize} from "sequelize";
import {Categories} from "./Category";
const { DataTypes } = require('sequelize');

export const Products = sequelize.define('products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    currency: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    illustration: {
        type: DataTypes.BLOB,
        allowNull: true
    },
    quantity: { // represent as ["250g", "500g"] ...
        type: DataTypes.ARRAY(DataTypes.TEXT),
        defaultValue: []
    },
    // DATA FOR DASHBOARD
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    /*
    // TODO one to many relation to get also severals views from the products
    geom: { //todo -> https://sequelize.org/master/class/lib/data-types.js~GEOMETRY.html for e.g how to save geometry data
        type: DataTypes.GEOMETRY,
        allowNull: true
    }*/

}, {
    // Other model options go here
    timestamps: true
});





