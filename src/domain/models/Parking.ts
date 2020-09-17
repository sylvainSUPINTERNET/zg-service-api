'use strict';

import {sequelize} from "../db/DbConnection";
const { Sequelize, DataTypes } = require('sequelize');

export const Parkings = sequelize.define('Parkings', {
    city: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
});



