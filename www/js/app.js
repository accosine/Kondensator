'use strict';

const React = require('react'),
    Hello = require('./components/hello');

React.render(<Hello />, document.body);

if (process.env.NODE_ENV === 'production') {
  console.log('Well, this is production');
}

if (process.env.NODE_ENV === 'development') {
  console.log('Well, this is development');
}

console.log('Ahh, whatevs');
