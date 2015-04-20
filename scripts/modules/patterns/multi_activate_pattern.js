// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  this.MultiActivatePattern = (function() {
    var CURRENT_VERSION, DBG_MODE, DIFF_ELEM_COUNT, NAME, PATTERN_SEQUENCE, clear_arrays, contains_different_elements, not_next_to, should_record_activate, _current_sequence, _last_activated_tab_position, _recorded;

    PATTERN_SEQUENCE = null;

    NAME = null;

    DIFF_ELEM_COUNT = 3;

    DBG_MODE = null;

    CURRENT_VERSION = null;

    _last_activated_tab_position = null;

    _recorded = [];

    _current_sequence = [];

    function MultiActivatePattern() {
      DBG_MODE = Constants.is_debug_mode();
      CURRENT_VERSION = Constants.get_current_activate_pattern_version();
      PATTERN_SEQUENCE = ['TAB_ACTIVATED', 'TAB_ACTIVATED', 'TAB_ACTIVATED', 'TAB_ACTIVATED'];
      NAME = "MULTI_ACTIVATE_" + CURRENT_VERSION;
    }

    MultiActivatePattern.prototype.pattern_sequence = function() {
      return PATTERN_SEQUENCE.toString();
    };

    MultiActivatePattern.prototype.current_sequence = function() {
      return _current_sequence.toString();
    };

    MultiActivatePattern.prototype.name = function() {
      return NAME;
    };

    MultiActivatePattern.prototype.register_event = function(event_name, event_data) {
      if (event_name === 'TAB_ACTIVATED') {
        if (should_record_activate(event_data)) {
          _current_sequence.push(event_name);
        }
      } else {
        _current_sequence.push(event_name);
      }
      if (DBG_MODE) {
        return console.log("Multi activate: current sequence: " + _current_sequence);
      }
    };

    MultiActivatePattern.prototype.specific_conditions_satisfied = function() {
      if (contains_different_elements(_recorded, DIFF_ELEM_COUNT)) {
        clear_arrays();
        return true;
      } else {
        return false;
      }
    };

    MultiActivatePattern.prototype.reset_states = function() {
      if (DBG_MODE) {
        console.log("Multi activate: resetting states");
      }
      return clear_arrays();
    };

    should_record_activate = function(data) {
      var tab_id, tab_position;
      tab_position = data.tab_index;
      tab_id = data.tab_id;
      if (_last_activated_tab_position === null || not_next_to(tab_position, _last_activated_tab_position)) {
        _last_activated_tab_position = tab_position;
        _recorded.push(tab_id);
        return true;
      } else {
        _last_activated_tab_position = tab_position;
        return false;
      }
    };

    not_next_to = function(pos1, pos2) {
      return Math.abs(pos1 - pos2) !== 1;
    };

    contains_different_elements = function(array, number) {
      var elem, tmp, _i, _len;
      tmp = [];
      for (_i = 0, _len = array.length; _i < _len; _i++) {
        elem = array[_i];
        if (tmp.indexOf(elem) === -1) {
          tmp.push(elem);
        }
      }
      if (DBG_MODE) {
        console.log("Array contains " + tmp.length + " different elements");
      }
      if (tmp.length >= number) {
        return true;
      } else {
        return false;
      }
    };

    clear_arrays = function() {
      _recorded = [];
      return _current_sequence = [];
    };

    return MultiActivatePattern;

  })();

}).call(this);