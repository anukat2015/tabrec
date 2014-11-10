// Generated by CoffeeScript 1.8.0
(function() {
  'use strict';
  var API_URL, BATCH_SIZE, DEBUG_MODE, connection, usage_logger;

  API_URL = 'http://tabber.fiit.stuba.sk';

  DEBUG_MODE = false;

  BATCH_SIZE = 50;

  connection = new Connection(API_URL, DEBUG_MODE);

  usage_logger = new UsageLogger(connection, BATCH_SIZE, DEBUG_MODE);

  usage_logger.start();

}).call(this);
