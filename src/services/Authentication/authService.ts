'use strict';

export const authService = {

    login : (req,res,next) => {
        res.status(200).json({
            "hello": "login service"
        })
    },


};
