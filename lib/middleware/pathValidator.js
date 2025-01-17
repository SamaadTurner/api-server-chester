'use strict';

function pathValidator(request, response, next) {
  if (request.path.includes('/api/pet')) {
    next();
  } else if (request.path.includes('/api/car')) {
    next();
  } else {
    next({path : 'Error 404 - Incorrect Path'})
  }
}

module.exports = pathValidator;
