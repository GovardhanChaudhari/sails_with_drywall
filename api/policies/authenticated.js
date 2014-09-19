// Location: /api/policies/authenticated.js
module.exports = function (req, res, next) {

    console.log("In authenticated policy ****** ");
    if(req['_sails']){
        console.log("Found _sails");
    }else{
        console.log("Not found _sails");
    }
    console.log("****************************** ");

    if (req.isAuthenticated()) {
        /*if (!req['locals']){
            req['locals'] = {};
        }*/
        //req['locals']['user'] = req.user[0];
        return next();
    } else {
        return res.send(403, { message: 'Not Authorized' });
    }
};