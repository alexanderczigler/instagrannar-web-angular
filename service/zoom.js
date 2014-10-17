angular.module('ingr-web').service('zoom', function () {
  'use strict';

  var zoom = {
    levelRadiusMap: {
    1: 5000,
    2: 4500,
    3: 4000,
    4: 3500,
    5: 2900,
    6: 2400,
    7: 2000,
    8: 1750,
    9: 1500,
    10: 1250,
    11: 1000,
    12: 750,
    13: 500,
    14: 350,
    15: 200,
    16: 175,
    17: 125,
    18: 100,
    19: 75,
    20: 40,
    21: 20
    },
    radius: function(level) {
      return this.levelRadiusMap[level];
    },
    level: function(radius) {
      this.levelRadiusMap.map(function (lr) {
        // console.log(lr);
      });
    }
  };

  return zoom;
});