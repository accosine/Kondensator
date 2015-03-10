/*
 * AppDispatcher
 *
 * A singleton that operates as the central hub for application updates.
 *
 */

const Dispatcher = require('flux').Dispatcher;
const assign = require('object-assign');

const AppDispatcher = assign(new Dispatcher(), {

  /**
   * A bridge function between the views and the dispatcher, marking the action
   * as a view action.  Another variant here could be handleServerAction.
   * @param  {object} action The data coming from the view.
   */
  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }

});

module.exports = AppDispatcher;