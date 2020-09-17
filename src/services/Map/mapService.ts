'use strict';

const fetch = require('node-fetch');

export const mapService = {
    getWayPoints: async (req, res, next) => {
        const {positionA, positionB} = req.params;

        if ( positionA && positionB ) {
            try {
                //TODO -> OSRM url
                //https://router.project-osrm.org/route/v1/driving/48.828144,2.2646452;48.8283193,2.2644305?geometries=polyline&alternatives=false&steps=true&generate_hints=false

                // TODO -> use OSRM project URL instead of static data obv
                /*
                const mapInfo = await fetch('https://gorest.co.in/public-api/todos');
                req.mapInfoJson = await mapInfo.json();
                 */

                req.mapInfoJson = {
                    "waypoints": [
                        {
                            "name": "",
                            "location": [
                                47.34759,
                                3.874155
                            ]
                        },
                        {
                            "name": "",
                            "location": [
                                47.34759,
                                3.874155
                            ]
                        }
                    ]
                };

                next();

            } catch (e) {
                console.log(e);
                console.log("fall");
                res.status(400).json({
                    "message": e,
                    "code": 400
                })
            }
        } else {
            res.status(400).json({
                "message": "Invalid positions informations",
                "code": 400
            });
        }



    },
    vecotrizePolyline: async (req, res, next) => {
        const {mapInfoJson} = req;

        if ( mapInfoJson ) {
            const { waypoints } = mapInfoJson;
            if ( waypoints ) {

                const matrixLocations:Array<Array<number>> = waypoints.map(info => { return info['location']});

                res.status(200).json({
                    "message": "matrix generated with success",
                    "data": matrixLocations,
                    "code": 200
                })
            } else {
                res.status(400).json({
                    "message": "Sorry, we found found not path for this locations",
                    "code": 400
                });
            }
        } else {
            res.status(400).json({
                "message": "Can't have locations informations. Please try later",
                "code": 400
            });
        }
    },
}
