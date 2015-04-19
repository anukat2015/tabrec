// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  var API_URL, load_options, reset_options, save_option, substitute_for_new_modes, update_user;

  API_URL = Constants.get_api_url();

  reset_options = function() {
    $('#user-level-select').val('advanced');
    $('#rec-mode-select').val('interactive');
    return $('#other-plugins-cb').prop('checked', false);
  };

  load_options = function() {
    return chrome.storage.sync.get(['user_id', 'user_level', 'rec_mode', 'other_plugins'], function(result) {
      if (result) {
        $('#user-level-select').val(result.user_level);
        $('#rec-mode-select').val(result.rec_mode);
        $('#uid').text(result.user_id);
        return $('#other-plugins-cb').prop('checked', result.other_plugins);
      } else {
        return reset_options();
      }
    });
  };

  save_option = function() {
    var otherPlugins, recMode, userLevel;
    userLevel = $('#user-level-select').val();
    recMode = $('#rec-mode-select').val();
    otherPlugins = $('#other-plugins-cb').prop('checked');
    return chrome.storage.sync.set({
      'other_plugins': otherPlugins,
      'user_level': userLevel,
      'rec_mode': recMode
    }, function() {
      return chrome.storage.sync.get(['user_id'], function(result) {
        return update_user(result.user_id, userLevel, recMode, otherPlugins);
      });
    });
  };

  update_user = function(id, exp, rec, op) {
    return $.ajax("" + API_URL + "/users/" + id, {
      type: 'PUT',
      dataType: 'json',
      data: {
        user: {
          rec_mode: rec,
          experience: exp,
          other_plugins: op
        }
      },
      success: function(data, textStatus, jqXHR) {
        return swal('Success!', 'Your settings has been saved!', 'success');
      }
    });
  };

  $('#save-settings').click(function() {
    return save_option();
  });

  $('#reset-settings').click(function() {
    return reset_options();
  });

  $(document).ready(function() {
    substitute_for_new_modes();
    return load_options();
  });

  substitute_for_new_modes = function() {
    return chrome.storage.sync.get(['rec_mode'], function(result) {
      if (result.rec_mode) {
        if (result.rec_mode === 'semi-interactive') {
          return chrome.storage.sync.set({
            'rec_mode': 'interactive'
          });
        } else if (result.rec_mode === 'aggressive') {
          return chrome.storage.sync.set({
            'rec_mode': 'automatic'
          });
        }
      }
    });
  };

}).call(this);
