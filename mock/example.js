var co = require('co');
var fetch = require('node-fetch');
var safeeval = require('safe-eval');
var mockjs = require('mockjs');
var Host = 'http://rapapi.org/mockjs/19512'

function mockMapFun(req,res){
  co(function *() {
      var response = yield fetch(Host + req.url);
      var mockTpl = yield response.text();
      res.json( mockjs.mock(safeeval(mockTpl))['data'] );
  });
}

module.exports = {
  'GET /member/list': mockMapFun
};
