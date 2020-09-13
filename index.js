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
  let newdriver = [...driver, name];
  return newdriver;
}

function prependDriver(name) {
  let newdriver = [name, ...drivers];
  return newdriver;
}

function removeFirstDriver() {
  return drivers.splice(0, 2);
}

function removeFirstDriver() {
  return drivers.splice(1);
}





