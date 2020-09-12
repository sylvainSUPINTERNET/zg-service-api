'use strict';

import {Request, Response, NextFunction} from 'express';

export const Authorization = {
    checkAuthorizaiton : (group:string) => {
        return (req:Request, res:Response, next: NextFunction) => {
            const { authorization } = req.headers;

            if ( !authorization ) {
                res.status(403).json({
                    data: 'You must be logged to access this resource'
                })
            }



            // TODO -> get token from authorization then open it to check the groups key and make sure there is a value equal to group given



            console.log("Group looking for ", group);
            console.log("AUTHORIZATION - > ", req.headers.authorization);
            next();
        }
    }
}

