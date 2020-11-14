'use strict';
import * as express from 'express';
import {categoryService} from "../../../services/Category/categoryService";

const categoryRouter = express.Router();

categoryRouter.get('/static', categoryService.getAllCategoryStatic);
categoryRouter.get('/', categoryService.getAllCategory);



export default categoryRouter;
