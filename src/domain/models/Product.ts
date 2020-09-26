'use strict';

import {sequelize} from "../db/DbConnection";
const { DataTypes } = require('sequelize');


// TODO
// media Many to Many (n products have n medias) -> media is name / BLOB

export const Products = sequelize.define('Products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    currency: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    geom: { //todo -> https://sequelize.org/master/class/lib/data-types.js~GEOMETRY.html for e.g how to save geometry data
        type:DataTypes.GEOMETRY,
        allowNull: true
    }
}, {
    // Other model options go here
    timestamps: true
});



