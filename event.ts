import * as EventEmitter from 'events';

class MyEmitter extends EventEmitter {}

let myEmitter = null;

export function initEventEmitter() {
    myEmitter = new MyEmitter();
    return myEmitter;
}

export function getEventEmitter() {
    if (myEmitter) {
        return myEmitter;
    }
    throw new Error('EventEmitter have not been initialized');
}
