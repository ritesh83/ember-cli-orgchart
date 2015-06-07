/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-cli-orgchart',

  included: function (app) {
      this._super.included(app);
      app.import(app.bowerDirectory + '/jquery-orgchart/jquery.orgchart.js');
      app.import(app.bowerDirectory + '/jquery-orgchart/jquery.orgchart.css');
  }
};
