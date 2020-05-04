const Bundler = require('parcel-bundler');
const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

const forward = ['/tours','/tours/add', '/login', '/logout'];
app.use(forward, proxy({target: 'http://192.168.86.249:3434'}));

const bundler = new Bundler('./index.html');
app.use(bundler.middleware());
app.listen(1234);
