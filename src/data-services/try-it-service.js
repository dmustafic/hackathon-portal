'use strict';

angular.module('tryItService', [])

.constant('routeParams', [
  'vin',
  'requestId',
  'messageId',
  'id',
  'userURI',
  'senderURI'
])
.constant('queryParams', [
  'longpoll'
])

/**
 * @ngdoc service
 * @name TryItData
 * @requires emulatorDomain
 * @requires routeParams
 * @requires queryParams
 * @description
 *
 * This model stores the current "try it"/emulator values.
 */
.factory('TryItData', function (emulatorDomain, routeParams, queryParams) {
  var TryItData, originalValues, i, count, key, value;

  function generateRandomId() {
    return '' + parseInt(Math.random() * 10000000000);
  }

  function generateRandomBoolean() {
    return '' + (Math.random() < 0.5);
  }

  function reset() {
    for (i = 0, count = routeParams.length; i < count; i += 1) {
      TryItData.routeParams[routeParams[i]] = originalValues.routeParams[routeParams[i]];
    }

    for (i = 0, count = queryParams.length; i < count; i += 1) {
      TryItData.queryParams[queryParams[i]] = originalValues.queryParams[queryParams[i]];
    }

    TryItData.emulatorDomain = originalValues.emulatorDomain;
  }

  originalValues = {
    emulatorDomain: emulatorDomain,
    routeParams: {},
    queryParams: {}
  };

  TryItData = {
    emulatorDomain: originalValues.emulatorDomain,
    routeParams: {},
    queryParams: {},
    reset: reset
  };

  for (i = 0, count = routeParams.length; i < count; i += 1) {
    originalValues.routeParams[routeParams[i]] = generateRandomId();
  }

  for (i = 0, count = queryParams.length; i < count; i += 1) {
    originalValues.queryParams[queryParams[i]] = generateRandomBoolean();
  }

  reset();

  return TryItData;
});
