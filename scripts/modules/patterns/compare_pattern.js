// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  this.ComparePattern = (function() {
    var CURRENT_VERSION, DBG_MODE, NAME, PATTERN_SEQUENCE, clear_arrays, contains_only_two_different_ids, should_record_activate, _current_sequence, _last_activated_tab_id, _recorded;

    PATTERN_SEQUENCE = null;

    NAME = null;

    DBG_MODE = null;

    CURRENT_VERSION = null;

    _last_activated_tab_id = null;

    _recorded = [];

    _current_sequence = [];

    function ComparePattern() {
      DBG_MODE = Constants.is_debug_mode();
      CURRENT_VERSION = Constants.get_current_activate_pattern_version();
      PATTERN_SEQUENCE = ['TAB_ACTIVATED', 'TAB_ACTIVATED', 'TAB_ACTIVATED', 'TAB_ACTIVATED'];
      NAME = "COMPARE_" + CURRENT_VERSION;
    }

    ComparePattern.prototype.pattern_sequence = function() {
      return PATTERN_SEQUENCE;
    };

    ComparePattern.prototype.current_sequence = function() {
      return _current_sequence;
    };

    ComparePattern.prototype.name = function() {
      return NAME;
    };

    ComparePattern.prototype.register_event = function(event_name, event_data) {
      if (event_name === 'TAB_ACTIVATED') {
        if (should_record_activate(event_data)) {
          _current_sequence.push(event_name);
        }
      } else {
        _current_sequence.push(event_name);
      }
      if (DBG_MODE) {
        return console.log("Compare: current sequence: " + _current_sequence);
      }
    };

    ComparePattern.prototype.specific_conditions_satisfied = function() {
      if (contains_only_two_different_ids(_recorded)) {
        return clear_arrays();
      }
    };

    ComparePattern.prototype.reset_states = function() {
      if (DBG_MODE) {
        console.log("Compare: resetting states");
      }
      return clear_arrays();
    };

    clear_arrays = function() {
      _recorded = [];
      return _current_sequence = [];
    };

    should_record_activate = function(data) {
      _recorded.push(data.tab_id);
      return true;
    };

    contains_only_two_different_ids = function(array) {
      return false;
    };

    return ComparePattern;

  })();

}).call(this);