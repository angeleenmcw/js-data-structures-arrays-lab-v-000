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

function destructivelyRemoveFirstDriver() {
drivers.shift();
}

function appendDriver(name) { 
  return [...driver, name];
}

function prependDriver(name) {
  return [name, ...drivers];
}

function removeFirstDriver() {
  return drivers.splice(0, 2);
}

function removeFirstDriver() {
  return drivers.splice(1);
}





