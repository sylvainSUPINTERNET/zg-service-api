'use strict';
import * as express from 'express';
import {Services} from "../../services";



const authRouter = express.Router();

authRouter.get('/login', Services.authService.login)

export default authRouter;
