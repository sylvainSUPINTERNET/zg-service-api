'use strict';
import * as express from 'express';
import {productService} from "../../../services/Product/productService";

const productRouter = express.Router();

productRouter.get('/', productService.getProducts);
productRouter.get('/:id', productService.getProductById);


export default productRouter;
