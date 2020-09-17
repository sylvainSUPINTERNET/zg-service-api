'use strict';
import * as express from 'express';
import {Authorization} from "../../middlewares/security/authorization";
import {mapService} from "../../../services/Map/mapService";

const mapRouter = express.Router();

//mapRouter.get('/vectorize/:positionA;:positionB', Authorization.checkAuthorizaiton("User"), mapService.getWayPoints, mapService.vecotrizePolyline);
mapRouter.get('/vectorize/:positionA;:positionB', mapService.getWayPoints, mapService.vecotrizePolyline);

export default mapRouter;
