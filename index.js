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
  let newDriver = [...driver, name]
  return newDriver;
}

function prependDriver(name) {
  let newDriver = [name, ...drivers]
  return newDriver;
}

function removeFirstDriver() {
  return drivers.splice(0, 2);
}

function removeFirstDriver() {
  return drivers.splice(1);
}





