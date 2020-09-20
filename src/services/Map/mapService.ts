'use strict';

const fetch = require('node-fetch');
const polyline = require('@mapbox/polyline');

export const mapService = {
    getWayPoints: async (req, res, next) => {
        const {positionA, positionB} = req.params;

        if ( positionA && positionB ) { // TODO -> get positionA and positionB with nominatim (such as OSRM map) to get street location
            try {
                const mapInfo = await fetch(`https://routing.openstreetmap.de/routed-car/route/v1/driving/2.2668435,48.827963;2.2646917,48.8275859?overview=false&alternatives=true&steps=true&geometries=geojson`);
                req.mapInfoJson = await mapInfo.json();

                // GEO JSON INSTEAD OF POLYLINE ENCODED :
                // https://router.project-osrm.org/route/v1/driving/48.828144,2.2646452;48.8283193,2.2644305?geometries=geojson&alternatives=false&steps=true&generate_hints=true

                // https://stackoverflow.com/questions/37345416/how-to-use-osrm-match-api-in-leaflet-to-draw-a-route
                // e.g https://router.project-osrm.org/route/v1/driving/48.828144,2.2646452;48.8283193,2.2644305?geometries=polyline&alternatives=false&steps=true&generate_hints=false
                /*
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
                 */

                next();

            } catch (e) {
                console.log(e);
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
    vectorizePolyline: async (req, res, next) => {
        const {mapInfoJson} = req;

        if ( mapInfoJson ) {

            if ( req.mapInfoJson.routes ) {

                let matrixLocations:Array<Array<number>> = [];

                // build matrix for each steps (to draw the polyline)
                for ( let element of req.mapInfoJson.routes[0].legs[0].steps) {

                    // Leaflet polyline needs -> [[lat,lng],[lat,lng]] if you reverse the sense of lng / lat (not showing on map)
                    element.geometry.coordinates.map(coordArr => coordArr.reverse());

                    matrixLocations.push(...element.geometry.coordinates);
                }


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
