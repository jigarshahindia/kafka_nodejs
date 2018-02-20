'use strict';

const requireToken = "abczyz"

/*
  This middleware will be used to authorize the API request made
  Using AWT token authorization
*/
var auth = function authRequest(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
	if(token === requireToken){
		next()
	}
	else {
		return res.json({ success: false, message: 'Failed to authenticate token.' }); 
	}
}
exports.auth = auth