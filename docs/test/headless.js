const expect = require('chai').expect;

global.window = global; 
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockDataBase = new firebasemock.MockFirebase();
mockDataBase.autoFlush();
mockauth.autoFlush();
global.firebase = firebasemock.MockFirebaseSdk(
  path => path ? mockdatabase.child(path) : mockdatabase,
  () => mockauth,
);
require('../src/js/controller.js');

require('./controller.spec.js');
