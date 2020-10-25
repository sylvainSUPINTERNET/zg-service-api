'use strict';

import {repositories} from "../../domain";

export const productService = {

    getProductById: async (req,res,next) => {
        try {
            const {id} = req.params;
            const product = await repositories.ProductRepository.getById(id);
            res.status(200).json({
                "error": false,
                "message": product
            })
        } catch ( e ){
            res.status(400).json({
                "error": true,
                "message": e
            });
        }
    },

    getProducts: async (req,res,next) => {
        try {
            const products =  await repositories.ProductRepository.getAll();
            res.status(200)
                .json({
                    "error": false,
                    "message": products
                })
        } catch ( e ) {
            res.status(400).json({
                "error": true,
                "message": e
            });
        }
    }
};

