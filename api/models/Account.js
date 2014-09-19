/**
* Account.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	isVerified: { type: 'string', defaultsTo: '' },
    verificationToken: { type: 'string', defaultsTo: '' },
    company: { type: 'string', defaultsTo: '' },
    phone: { type: 'string', defaultsTo: '' },
    zip: { type: 'string', defaultsTo: '' },
	search: {type:'array'},
	
	user :{
		model:"User"
	},
	userCreated:{
		model:"User"
	}
  }
};

