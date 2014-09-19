name: {
      first: { type: 'string', defaultsTo: '' },
      middle: { type: 'string', defaultsTo: '' },
      last: { type: 'string', defaultsTo: '' },
      full: { type: 'string', defaultsTo: '' }
    },
	
	    status: {
      id: { type: 'string', ref: 'Status' },
      name: { type: 'string', defaultsTo: '' },
      userCreated: {
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        name: { type: 'string', defaultsTo: '' },
        time: { type: Date, defaultsTo: Date.now }
      }
    },
    statusLog: [mongoose.modelSchemas.StatusLog],
    notes: [mongoose.modelSchemas.Note],
    userCreated: {
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      name: { type: 'string', defaultsTo: '' },
      time: { type: Date, defaultsTo: Date.now }
    },
	
Account.findOne({id:1}).exec(function(err,ac){console.log(ac);ac.userCreated=2;ac.save(function(err,a){console.log(a)})});


//TODO are these global vars ?, make them local
// routing urls
baseAdminUrl: "/admin",
    baseAccountUrl: "/account",

// global configurations

    config: {
    port: process.env.PORT || 3000,
        mongodb: {
        uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'localhost/drywall'
    },
    companyName: 'Acme, Inc.',
        projectName: 'Drywall',
        systemEmail: 'your@email.addy',
        cryptoKey: 'k3yb0ardc4t',
        loginAttempts: {
        forIp: 50,
            forIpAndUser: 7,
            logExpiration: '20m'
    },
    requireAccountVerification: false,
        smtp: {
        from: {
            name: process.env.SMTP_FROM_NAME || global.config.projectName + ' Website',
                address: process.env.SMTP_FROM_ADDRESS || 'your@email.addy'
        },
        credentials: {
            user: process.env.SMTP_USERNAME || 'your@email.addy',
                password: process.env.SMTP_PASSWORD || 'bl4rg!',
                host: process.env.SMTP_HOST || 'smtp.gmail.com',
                ssl: true
        }
    },

    urls: {
        admin: {
            //adminUrl:"/admin",
            //userUrl: this.adminUrl + "/users"
            userUrl: global.baseAdminUrl + "/users",
                accountUrl: global.baseAdminUrl + "/accounts",
                admingroupUrl: global.baseAdminUrl + "/admin-groups",
                categoryUrl: global.baseAdminUrl + "/categories",
                statusUrl: global.baseAdminUrl + "/statuses",
                adminUrl: global.baseAdminUrl + "/administrators"
        },

        entryUrl: "/entries",

            signup: "/signup/",
            login: "/login",
            logout: "/logout",
            resetPassword: "/login/forgot",

            contact: "/contact",
            about: "/about",

            account: {
            root: global.baseAccountUrl,
                settings: global.baseAccountUrl + "/settings"
        }
    },
    models: {
        names: ['Entry', 'User', 'Account', 'Admin', 'AdminGroup', 'Category', 'Status']
    }
}

form
    div.form-group
    label Pick a Username:
        input.form-control(type='text', name='username', value!='<%= username %>')

    div.form-group
    label Enter Your Email:
        input.form-control(type='text', name='email', value!='<%= email %>')
    div.form-group
    label Create a Password:
        input.form-control(type='password', name='password', value!='<%= password %>')
    div.form-group
    button.btn.btn-primary.btn-signup(type='button') Create My Account