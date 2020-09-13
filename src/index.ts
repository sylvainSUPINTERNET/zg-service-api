'use strict';

import app from './application/Application';
import {config, getResourcePath} from './config/config';
import authRouter from "./application/routes/authentication/AuthRouter";
import {sequelize} from "./domain/db/DbConnection";


/**
 * HTTP logger
 */
const morgan = require('morgan');
app.use(morgan('combined'))


/**
 * Resources
 */
app.use(getResourcePath('auth'), authRouter);


/**
 * Startup
 */
app.listen(config.PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('database connection has been established successfully.');
    } catch (e) {
        console.log("ERROR DB : ", e);
    }
    console.log(`zg-map listening on port :  ${config.PORT}!`)
});
