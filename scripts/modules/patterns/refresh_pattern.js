// Generated by CoffeeScript 1.9.3
(function() {
  'use strict';
  this.RefreshPattern = (function() {
    var CURRENT_VERSION, DBG_MODE, NAME, PATTERN_SEQUENCE, _current_sequence, _recorded, clear_arrays, one_tab_refreshed_at_least_3_times;

    PATTERN_SEQUENCE = null;

    NAME = null;

    DBG_MODE = null;

    CURRENT_VERSION = null;

    _recorded = [];

    _current_sequence = [];

    function RefreshPattern() {
      DBG_MODE = Constants.is_debug_mode();
      CURRENT_VERSION = Constants.get_current_refresh_pattern_version();
      PATTERN_SEQUENCE = ['TAB_UPDATED', 'TAB_UPDATED', 'TAB_UPDATED'];
      NAME = "REFRESH_" + CURRENT_VERSION;
    }

    RefreshPattern.prototype.pattern_sequence = function() {
      return PATTERN_SEQUENCE.toString();
    };

    RefreshPattern.prototype.current_sequence = function() {
      return _current_sequence.toString();
    };

    RefreshPattern.prototype.name = function() {
      return NAME;
    };

    RefreshPattern.prototype.register_event = function(event_name, event_data) {
      if (event_name === 'TAB_UPDATED') {
        _current_sequence.push(event_name);
        _recorded.push(event_data);
        if (DBG_MODE) {
          return console.log("Refresh: current sequence: " + _current_sequence);
        }
      }
    };

    RefreshPattern.prototype.specific_conditions_satisfied = function() {
      if (one_tab_refreshed_at_least_3_times()) {
        return true;
      } else {
        return false;
      }
    };

    RefreshPattern.prototype.reset_states = function() {
      if (DBG_MODE) {
        console.log("Refresh: resetting states");
      }
      return clear_arrays();
    };

    clear_arrays = function() {
      _recorded = [];
      return _current_sequence = [];
    };

    one_tab_refreshed_at_least_3_times = function() {
      var counter, i, inner_obj, j, len, len1, obj, tab_id, tab_url;
      counter = 0;
      for (i = 0, len = _recorded.length; i < len; i++) {
        obj = _recorded[i];
        tab_id = obj.id;
        tab_url = obj.url;
        for (j = 0, len1 = _recorded.length; j < len1; j++) {
          inner_obj = _recorded[j];
          if (tab_id === inner_obj.id && tab_url === inner_obj.url) {
            counter += 1;
          }
          if (counter === 3) {
            return true;
          }
        }
        counter = 0;
      }
      return false;
    };

    return RefreshPattern;

  })();

}).call(this);
