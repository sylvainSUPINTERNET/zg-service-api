'use strict';
import * as express from 'express';
import {Authorization} from "../../middlewares/security/authorization";
import {mapService} from "../../../services/Map/mapService";

const mapRouter = express.Router();

mapRouter.get('/vectorize/:positionA;:positionB', Authorization.checkAuthorization("TEST"), mapService.getWayPoints, mapService.vectorizePolyline);

export default mapRouter;
