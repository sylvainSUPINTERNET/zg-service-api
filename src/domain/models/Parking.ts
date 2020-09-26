'use strict';

import {sequelize} from "../db/DbConnection";
const { DataTypes } = require('sequelize');

export const Parkings = sequelize.define('Parkings', {
    city: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
});



