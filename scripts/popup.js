// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  var API_URL;

  API_URL = Constants.get_api_url();

  $(function() {
    chrome.storage.sync.get(['user_id'], function(result) {
      if (result.user_id) {
        $.ajax("" + API_URL + "/stats/browsing/" + result.user_id, {
          type: 'GET',
          dataType: 'json',
          success: function(data, textStatus, jqXHR) {
            $('#tabs-created').html(data.alltime.created);
            return $('#tabs-closed').html(data.alltime.closed);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            $('#tabs-created').html('N/A');
            return $('#tabs-closed').html('N/A');
          }
        });
        return $.ajax("" + API_URL + "/stats/rec/" + result.user_id, {
          type: 'GET',
          dataType: 'json',
          success: function(data, textStatus, jqXHR) {
            $('#recs-accepted').html(data.accepted);
            $('#recs-rejected').html(data.rejected);
            return $('#recs-reverted').html(data.reverted);
          },
          error: function(jqXHR, textStatus, errorThrown) {
            $('#recs-accepted').html('N/A');
            $('#recs-rejected').html('N/A');
            return $('#recs-rejected').html('N/A');
          }
        });
      }
    });
    return $('#settings').on('click', function() {
      return chrome.tabs.create({
        url: chrome.runtime.getURL('options.html'),
        active: true
      });
    });
  });

}).call(this);
