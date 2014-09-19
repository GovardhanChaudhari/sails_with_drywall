var passport = require("passport");
module.exports = {
    checkUser: function (req, res) {

        /*if(req['_sails']){
         console.log("AuthController: found _sails :" );
         }else{
         console.log("AuthController: Not found _sails :" + req._sails );
         }*/


        console.log("Checking user: " + req.user);
        //console.log("user name: " + req.user[0].username);
        if (typeof req.user == 'undefined') {
            res.redirect("/");
        } else {
            res.view("/", {user: req.user[0]});
        }
    },

    signUp: function (req, res) {
        return res.view(sails.appConfig)
    },


    login: function (req, res) {
        res.view('auth/login');
    },

    process: function (req, res) {
        passport.authenticate('local', function (err, user, info) {
            if ((err) || (!user)) {
                console.log("passport auth error: " + err);
                res.redirect('/login');
                return;
            }
            req.logIn(user, function (err) {
                if (err) res.redirect('/login');
                return res.redirect("/checkuser");
            });
        })(req, res);
    },

    logout: function (req, res) {
        console.log("Called logout *******************");
        req.logout();
        //res.send('logout successful');
        res.redirect("/checkuser");
    },
    _config: {}
};