'use strict';
import * as express from 'express';

import {Authorization} from "../../middlewares/security/authorization";
import {authService} from "../../../services/Authentication/authService";

const authRouter = express.Router();

authRouter.get('/login', Authorization.checkAuthorization("User"), authService.login)

export default authRouter;
