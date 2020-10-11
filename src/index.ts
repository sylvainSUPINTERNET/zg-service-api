'use strict';

import app from './application/Application';
import {config, getResourcePath} from './config/config';
import authRouter from "./application/routes/authentication/AuthRouter";
import {sequelize} from "./domain/db/DbConnection";
import {models} from "./domain";
import mapRouter from "./application/routes/map/MapRouter";
import {Categories} from "./domain/models/Category";
import {Products} from "./domain/models/Product";
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// TODO : this is temporary, tould be replaced by real nginx proxy
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(cookieParser());


/**
 * HTTP logger
 */
const morgan = require('morgan');
app.use(morgan('combined'));



/**
 * Resources
 */
app.use(getResourcePath('auth'), authRouter);
app.use(getResourcePath('map'), mapRouter);

/**
 * Startup
 */
app.listen(config.PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('database connection has been established successfully.');

        /**
         * Init and or update models structure
         */

        Categories.hasMany(Products,
            {
                as: 'products',
                foreignKey: 'categoryId'
            });

        models.map( async model => {
            await model.sync({ alter: true });
        });




    } catch (e) {
        console.log("ERROR DB : ", e);
    }
    console.log(`zg-map listening on port :  ${config.PORT}!`)
});
