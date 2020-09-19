'use strict';

import {Request, Response, NextFunction} from 'express';
import * as jwt from 'jsonwebtoken';
import * as fs from "fs";


export const Authorization = {
    checkAuthorizaiton : (group:string) => {

        return (req:Request, res:Response, next: NextFunction) => {
            // For test purpose ...
            if (group === "TEST") {
                return next();
            }
            const { authorization } = req.headers;

            if ( !authorization || typeof authorization == "undefined") {
                res.status(403).json({
                    data: 'You must be logged to access this resource'
                })
            } else {

                const token = req.headers.authorization.replace("Bearer ", "");

                try {
                    const {resolve} = require("path");
                    const cert = fs.readFileSync(`${resolve()}/src/config/jwt/publicKey.pem`);  // get public key
                    const decoded = jwt.verify(token, cert);
                    if ( decoded["groups"] ) {
                        const groups = decoded["groups"];

                        if(groups.filter( group => { return group === group }).length === 0) {
                            res.status(401).json({
                                data: 'You are not authorized to access to this resource'
                            })
                        } else {
                            console.log(decoded);
                            console.log("Group looking for ", group);
                            console.log("AUTHORIZATION - > ", req.headers.authorization);
                            next();
                        }
                    } else {
                        res.status(401).json({
                            data: 'Invalid token'
                        })
                    }
                } catch(err) {
                    res.status(403).json({
                        data: err
                    })
                }



            }

        }
    }
}

