import {callbackCaller} from './sourceB';

function f() {
    console.log('mapped');
}

callbackCaller(f);