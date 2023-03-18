'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.apiV1LoginPOST = function apiV1LoginPOST (req, res, next, body) {
  Default.apiV1LoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1Product6406f86a18cc6907d3d230daDELETE = function apiV1Product6406f86a18cc6907d3d230daDELETE (req, res, next) {
  Default.apiV1Product6406f86a18cc6907d3d230daDELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1Product6406fa7762cbb2d6f2757efeGET = function apiV1Product6406fa7762cbb2d6f2757efeGET (req, res, next) {
  Default.apiV1Product6406fa7762cbb2d6f2757efeGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1Product6406fa7762cbb2d6f2757efePUT = function apiV1Product6406fa7762cbb2d6f2757efePUT (req, res, next, body) {
  Default.apiV1Product6406fa7762cbb2d6f2757efePUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ProductGET = function apiV1ProductGET (req, res, next) {
  Default.apiV1ProductGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ProductPOST = function apiV1ProductPOST (req, res, next, body) {
  Default.apiV1ProductPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1User6405b00317923136ae61ace7DELETE = function apiV1User6405b00317923136ae61ace7DELETE (req, res, next) {
  Default.apiV1User6405b00317923136ae61ace7DELETE()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1User6405b00317923136ae61ace7GET = function apiV1User6405b00317923136ae61ace7GET (req, res, next) {
  Default.apiV1User6405b00317923136ae61ace7GET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1User64113ead7eed105a1512d537PUT = function apiV1User64113ead7eed105a1512d537PUT (req, res, next, body) {
  Default.apiV1User64113ead7eed105a1512d537PUT(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1UserGET = function apiV1UserGET (req, res, next) {
  Default.apiV1UserGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1UserPOST = function apiV1UserPOST (req, res, next, body) {
  Default.apiV1UserPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
