import 'core-js/library';

import {
  Logger,
  LoggerFactory,
  RestErrorMiddleware
} from './common';
import { Express, Router } from 'express';
import { AppConfig } from './config';
import { AppDataServices } from './data';
import { ExpressAppFactory } from './express-app-factory';
import { ApiRouterFactory } from './api';
import * as mongoose from 'mongoose';

const LOGGER: Logger = LoggerFactory.getLogger();

// Turn environment variables into a strongly typed configuration object
const appConfig: AppConfig = new AppConfig(process.env);

// Create the application data services
const appServices: AppDataServices = new AppDataServices();

// Create the application router (to be mounted by the express server)
const apiRouter: Router = ApiRouterFactory.getApiRouter(appServices);

// Get the application middleware (to be mounted after the api router)
const errorMiddleware = [
  RestErrorMiddleware.normalizeToRestError,
  RestErrorMiddleware.serializeRestError
];

const app: Express = ExpressAppFactory.getExpressApp(appConfig, apiRouter, null, errorMiddleware);

mongoose.connect('mongodb+srv://SebaPucheta:123321@cluster0.rd3ci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
////////////////////

app.listen(appConfig.port, () => {
  LOGGER.info(`Express server listening on port ${appConfig.port}`);
});