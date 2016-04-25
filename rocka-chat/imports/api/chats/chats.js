import { Mongo } from 'meteor/mongo';

export const Chats = new Mongo.Collection('chats');

// Deny all client-side updates since we will be using methods to manage this collection
Chats.deny({
    insert() { return true; },
    update() { return true; },
    remove() { return true; },
});