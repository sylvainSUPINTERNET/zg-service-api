'use strict';

import {repositories} from "../../domain";

export const categoryService = {

    getAllCategoryStatic: async (req,res,next) => {
        try {
            const categories = await repositories.CategoryRepo.getAllStatic();
            res.status(200).json({
                "error": false,
                "message": categories
            })
        } catch ( e ){
            res.status(400).json({
                "error": true,
                "message": e
            });
        }
    },

    getAllCategory: async (req,res,next) => {
        try {
            const categories = await repositories.CategoryRepo.getAll();
            res.status(200).json({
                "error": false,
                "message": categories
            })
        } catch ( e ){
            res.status(400).json({
                "error": true,
                "message": e
            });
        }
    }
};

