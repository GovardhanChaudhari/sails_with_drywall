/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');

module.exports = {

    attributes: {
        username: { type: 'string', unique: true },
        password: {type: 'string', defaultsTo: "a"},
        email: { type: 'string', unique: true, email: true },
        isActive: 'string',
        resetPasswordToken: 'string',
        resetPasswordExpires: 'date',
        search: {type: 'array'},

        roles: {
            collection: "Account",
            via: "user"
        },

        defaultReturnUrl: function () {
            return "/user/edit/" + this.id;
        },

        //Override toJSON method to remove password from API
        toJSON: function () {
            var obj = this.toObject();
            // Remove the password object value
            //delete obj.password;
            // return the new object without password
            return obj;
        }
    },

    beforeCreate: function (user, cb) {
        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb(null, user);
                }
            });
        });
    },


    validatePassword: function (password, hash, done) {

        bcrypt.compare(password, hash, function (err, res) {
            done(err, res);
        });
    }

};

