'use strict';

import {sequelize} from "../db/DbConnection";
import {Sequelize} from "sequelize";
import {Products} from "./Product";
const { DataTypes } = require('sequelize');

export const Categories = sequelize.define('categories', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    // Other model options go here
    timestamps: true
});

