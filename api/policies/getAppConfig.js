/**
 * Created by gvc1 on 13-09-2014.
 */

module.exports = function (req, res, next) {

    console.log("In getAppConfig policy ****** ");
    if(req['_sails']){
        console.log("Found _sails");
        req._sails['appConfig'] = require('../../config/config.js');
        return next();
    }else{
        console.log("Not found _sails");
    }
    //console.log("****************************** ");


};