import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


// ----- Template -----
import './layoutApp.html';


// ----- Events -----

Template.layoutApp.onCreated(function () {

});


Template.layoutApp.onRendered(function () {

});


// ----- Helpers -----

Template.layoutApp.helpers({
	cordova() {
		return Meteor.isCordova && 'cordova';
	},
	templateGestures: {
		'swipeleft .cordova'(event, instance) {
			let menuLeftOpened = instance.$('.menu.menu-left.in').length;
			if (menuLeftOpened) {
				instance.$('#openLeftMenu').click();
			} else {
				let menuRightOpened = instance.$('.menu.menu-right.in').length;
				if (!menuRightOpened) {
					instance.$('#openRightMenu').click();
				}
			}
		},
		'swiperight .cordova'(event, instance) {
			let menuRightOpened = instance.$('.menu.menu-right.in').length;
			if (menuRightOpened) {
				instance.$('#openRightMenu').click();
			} else {
				let menuLeftOpened = instance.$('.menu.menu-left.in').length;
				if (!menuLeftOpened) {
					instance.$('#openLeftMenu').click();
				}
			}
		},
	},
});