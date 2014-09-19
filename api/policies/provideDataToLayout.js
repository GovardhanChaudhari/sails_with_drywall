/**
 * Created by gvc1 on 12-09-2014.
 */
// Location: /api/policies/authenticated.js
module.exports = function (req, res, next) {

    console.log("In provideDataToLayouts policy ****** ");
    if(req['_sails']){
        console.log("Found _sails");
        req.locals = require('../../config/config.js').urls;
        return next();
    }else{
        console.log("Not found _sails");
    }
    //console.log("****************************** ");


};