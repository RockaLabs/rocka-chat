import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

// Deny all client-side updates since we will be using methods to manage this collection
Messages.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});