import { Meteor } from 'meteor/meteor';
import { Chats } from '/imports/api/chats/chats.js';

if (Meteor.isServer) {
	// ----- Publications -----
	Meteor.publish('chats', function () {
	    return [Chats.find({ usersIds: this.userId }, { sort: { updatedAt: -1 } })];
	});


	// ----- Methods -----
	Meteor.methods({

	});
}