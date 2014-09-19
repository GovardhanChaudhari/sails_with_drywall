/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    list: function (req, res) {
        User.find().exec(function (err,users) {
            console.log("found users " + users);
            res.view({users:users})
        });
    },

    show: function (req, res) {
        User.findOne({id:req.params["id"]}).exec(function (err, user) {
            res.view({user:user});
        })
    },

    edit: function (req, res) {
        User.findOne({id:req.params["id"]}).exec(function (err, user) {
            res.view({user:user});
        })
    }
};

