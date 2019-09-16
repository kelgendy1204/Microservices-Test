import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { Server } from 'http';
import { initListeners } from './listeners';

import { getEventEmitter, initEventEmitter } from './event';

let server: Server | null = null;

function initApplication(): express.Application {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/', (req, res) => res.send('Hello World!'));

    app.post('/event', (req, res, next) => {
        const { name, payload } = req.body;
        if (name && payload) {
            getEventEmitter().emit(name, payload);
            res.sendStatus(204);
        } else {
            res.sendStatus(400);
        }
    });

    return app;
}

function start() {
    // Create eventManager Instance (only one for all  applciation)
    initEventEmitter();

    // Add Listeners
    initListeners();

    const app = initApplication();
    server = app.listen(process.env.PORT || 3001, () => {
        console.log(`Server started`);
    });
}

// Start the application
start();
