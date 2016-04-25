import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Tracker } from 'meteor/tracker';


// function enterFunction () {
// 	console.log("Entering a route!");
// }

// function exitFunction () {
// 	console.log("Exiting a route!");
// }

// // ----- Global Triggers -----

// FlowRouter.triggers.enter( [ enterFunction ], {
// 	// only: [ 'somePage', 'anotherPage', 'thisPage' ]
// });

// FlowRouter.triggers.exit( [ exitFunction ], {
// 	// except: [ 'somePage', 'anotherPage', 'thisPage' ]
// });


Accounts.onLogin(function () {
	FlowRouter.go('app.chat');
});

Tracker.autorun(function () {
	// Redirect to login when user logout
	if (!Meteor.userId()) {
		var routeName = FlowRouter.getRouteName();
		if (routeName && routeName.indexOf('app') !== -1) {
			FlowRouter.go('account.login');
		}
	}
});


FlowRouter.notFound = {
    action: function() {
    	if (Meteor.userId()) {
    		FlowRouter.go('app.chat');
    	} else {
    		FlowRouter.go('account.login');
    	}
    }
};