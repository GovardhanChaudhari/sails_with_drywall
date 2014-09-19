'use strict';

exports.port = process.env.PORT || 1337;
exports.mongodb = {
  uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'localhost/drywall'
};
exports.companyName = 'Acme, Inc.';
exports.projectName = 'Drywall';
exports.systemEmail = 'your@email.addy';
exports.cryptoKey = 'k3yb0ardc4t';
exports.loginAttempts = {
  forIp: 50,
  forIpAndUser: 7,
  logExpiration: '20m'
};
exports.requireAccountVerification = false;
exports.smtp = {
  from: {
    name: process.env.SMTP_FROM_NAME || exports.projectName +' Website',
    address: process.env.SMTP_FROM_ADDRESS || 'your@email.addy'
  },
  credentials: {
    user: process.env.SMTP_USERNAME || 'your@email.addy',
    password: process.env.SMTP_PASSWORD || 'bl4rg!',
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    ssl: true
  }
};
exports.oauth = {
  twitter: {
    key: process.env.TWITTER_OAUTH_KEY || '',
    secret: process.env.TWITTER_OAUTH_SECRET || ''
  },
  facebook: {
    key: process.env.FACEBOOK_OAUTH_KEY || '',
    secret: process.env.FACEBOOK_OAUTH_SECRET || ''
  },
  github: {
    key: process.env.GITHUB_OAUTH_KEY || '',
    secret: process.env.GITHUB_OAUTH_SECRET || ''
  },
  google: {
    key: process.env.GOOGLE_OAUTH_KEY || '',
    secret: process.env.GOOGLE_OAUTH_SECRET || ''
  },
  tumblr: {
    key: process.env.TUMBLR_OAUTH_KEY || '',
    secret: process.env.TUMBLR_OAUTH_SECRET || ''
  }
};

//TODO are these global vars ?, make them local
// routing urls
var baseAdminUrl="/admin";
var baseAccountUrl="/account";
var baseStylesUrl = "/styles/";

exports.urls = {
    admin:{
        //adminUrl:"/admin",
        //userUrl: this.adminUrl + "/users"
        userUrl: baseAdminUrl + "/users",
        accountUrl: baseAdminUrl + "/accounts",
        admingroupUrl: baseAdminUrl + "/admin-groups",
        categoryUrl: baseAdminUrl + "/categories",
        statusUrl: baseAdminUrl + "/statuses",
        adminUrl:baseAdminUrl+ "/administrators"
    },

    entryUrl:"/entries",

    signup:"/signup/",
    login:"/login",
    logout:"/logout",
    resetPassword:"/login/forgot",

    contact:"/contact",
    about:"/about",

    account:{
        root:baseAccountUrl,
        settings: baseAccountUrl + "/settings"
    },




    // css paths
    styles:{
        about: baseStylesUrl + "about.css"
    }

};
//models collection
exports.models = {
    names:['Entry','User', 'Account', 'Admin', 'AdminGroup', 'Category', 'Status']
};

