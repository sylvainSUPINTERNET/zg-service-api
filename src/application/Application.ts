'use strict';

import * as express from "express";
import * as bodyParser from "body-parser";
//import { Routes } from "./routes";

class App {
    public app: express.Application;
    //public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();
        //this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}

const app = new App().app;
export default app;
