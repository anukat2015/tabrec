// Generated by CoffeeScript 1.9.3
(function() {
  'use strict';
  this.Connection = (function() {
    var _api_url, _debug_mode, get_collection, get_member, post_collection, post_member;

    _debug_mode = null;

    _api_url = null;

    function Connection() {
      _api_url = Constants.get_api_url();
      _debug_mode = Constants.is_debug_mode();
    }

    Connection.prototype.get_user = function(id, callback) {
      return get_member('users', id, callback);
    };

    Connection.prototype.get_user_bstats = function(id, callback) {
      return get_member('stats/browsing', id, callback);
    };

    Connection.prototype.post_usage_logs = function(data) {
      return post_collection(data, 'logs/usage');
    };

    Connection.prototype.create_user = function(user_data) {
      return $.ajax(_api_url + "/users", {
        type: 'POST',
        dataType: 'json',
        data: {
          user: user_data
        },
        success: function(data, textStatus, jqXHR) {
          if (_debug_mode) {
            return console.log("Status: " + textStatus);
          }
        }
      });
    };

    Connection.prototype.create_rec_log = function(log_data) {
      if (_debug_mode) {
        console.log(log_data);
      }
      return $.ajax(_api_url + "/logs/rec", {
        type: 'POST',
        dataType: 'json',
        data: {
          log: log_data
        },
        success: function(data, textStatus, jqXHR) {
          if (_debug_mode) {
            return console.log("Status: " + textStatus);
          }
        }
      });
    };

    get_member = function(resource, id, callback) {
      return $.ajax(_api_url + "/" + resource + "/" + id, {
        type: 'GET',
        dataType: 'json',
        error: function(jqXHR, textStatus, errorThrown) {
          return callback(null);
        },
        success: function(data, textStatus, jqXHR) {
          return callback(data);
        }
      });
    };

    get_collection = function(resource) {
      return $.ajax(_api_url + "/" + resource, {
        type: 'GET',
        dataType: 'json',
        error: function(jqXHR, textStatus, errorThrown) {
          if (_debug_mode) {
            return console.log("Error: " + textStatus);
          }
        },
        success: function(data, textStatus, jqXHR) {
          if (_debug_mode) {
            return console.log("Status: " + textStatus);
          }
        }
      });
    };

    post_member = function(data, resource) {
      return $.ajax(_api_url + "/" + resource, {
        type: 'POST',
        dataType: 'json',
        data: {
          data: data
        },
        success: function(data, textStatus, jqXHR) {
          if (_debug_mode) {
            return console.log("Status: " + textStatus);
          }
        }
      });
    };

    post_collection = function(data, resource) {
      return $.ajax(_api_url + "/" + resource, {
        type: 'POST',
        dataType: 'json',
        data: {
          data: data
        },
        success: function(data, textStatus, jqXHR) {
          if (_debug_mode) {
            return console.log("Status: " + textStatus);
          }
        }
      });
    };

    return Connection;

  })();

}).call(this);
