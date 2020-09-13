const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
drivers.push('Ralph');
}

function destructivelyPrependDriver(name) {
drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver() {
drivers.pop();
}

drivers.shift();

const copyofdrivers = drivers.slice();

copyofdrivers;

drivers.push('Broom');

drivers.push('Anthony');

copyofdrivers.pop();

copyofdrivers.shift();








