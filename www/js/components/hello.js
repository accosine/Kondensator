'use strict';

/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the Store and passes the new data to its children.
 */

const React = require('react');
const counterStore = require('../stores/counter-store');
const counterActionCreators = require('../actions/counter-action-creators');

// Retrieve the current data from the Store
function getState() {
  return {
    clickcount: counterStore.getCount()
  };
}

const Hello = React.createClass({
  handleClick: function(event) {
    counterActionCreators.incrementCounter();
  },

  getInitialState: function() {
    return getState();
  },

  componentDidMount: function() {
    counterStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    counterStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <p onClick={this.handleClick}>Hello, click to increase counter: {this.state.clickcount}</p>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the Store
   */
  _onChange: function() {
    this.setState(getState());
  }
});

module.exports = Hello;

