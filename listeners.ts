import { getEventEmitter } from './event';

export function initListeners() {
    const eventEmitter = getEventEmitter();
    eventEmitter.on('event 1', event1);
    eventEmitter.on('event 2', event2);
}

function event1(payload: any) {
    console.log('Handler event 1');
    console.log('payload :', payload);
}

function event2(payload: any) {
    console.log('Handler event 2');
    console.log('payload :', payload);
}
