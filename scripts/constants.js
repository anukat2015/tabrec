// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  this.Constants = (function() {
    var DEBUG_MODE, USAGE_LOGGING;

    function Constants() {}

    DEBUG_MODE = false;

    USAGE_LOGGING = true;

    Constants.is_debug_mode = function() {
      return DEBUG_MODE;
    };

    Constants.usage_logging_on = function() {
      return USAGE_LOGGING;
    };

    Constants.get_api_url = function() {
      if (DEBUG_MODE) {
        return 'http://localhost:9292';
      } else {
        return 'http://tabber.fiit.stuba.sk:9292';
      }
    };

    Constants.get_batch_size = function() {
      if (DEBUG_MODE) {
        return 5;
      } else {
        return 50;
      }
    };

    Constants.get_max_running_average_bucket_size = function() {
      return 100;
    };

    Constants.get_running_average_gap_inclusion_threshold = function() {
      return 0.10;
    };

    Constants.get_rec_timeout = function() {
      return 30000;
    };

    Constants.get_max_running_average_event_gap = function() {
      return 60000;
    };

    Constants.get_min_running_average_event_gap = function() {
      return 50;
    };

    Constants.get_current_activate_pattern_version = function() {
      return 'V4';
    };

    Constants.get_current_compare_pattern_version = function() {
      return 'V0';
    };

    Constants.get_current_refresh_pattern_version = function() {
      return 'V0';
    };

    Constants.get_current_close_pattern_version = function() {
      return 'V0';
    };

    return Constants;

  })();

}).call(this);
