'use strict';

import app from './application/Application';
import {config, getResourcePath} from './config/config';
import authRouter from "./application/routes/authentication/AuthRouter";


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
app.listen(config.PORT, () => console.log(`zg-map listening on port :  ${config.PORT}!`));
