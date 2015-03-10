/*
 * Actions
 */

const AppDispatcher = require('../dispatcher/AppDispatcher');
const Constants = require('../constants/Constants');

const Actions = {

  /**
   * These are action creators:
   * @param  {nothing} this function does not take a parameter
   */
  incrementCounter: function() {
    AppDispatcher.handleViewAction({
      actionType: Constants.INCREMENT_COUNTER
    });
  }
};

module.exports = Actions;
