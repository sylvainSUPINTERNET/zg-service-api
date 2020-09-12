'use strict';

import app from './application/Application';
import {config, getResourcePath} from './config/config';
import authRouter from "./application/routes/AuthRouter";


/**
 * Resources
 */
app.use(getResourcePath('auth'), authRouter);


/**
 * Startup
 */
app.listen(config.PORT, () => console.log(`Example app listening on port ${config.PORT}!`));
