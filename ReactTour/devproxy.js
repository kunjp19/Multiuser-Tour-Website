const Bundler = require('parcel-bundler');
const express = require('express');
const createProxyMiddleware = require('http-proxy-middleware');
const path = require('path');

const app = express();
const forward = ['/tours', '/tours/add', '/login', '/logout'];

app.use(forward, createProxyMiddleware({target: 'http://localhost:3000'}));

const bundler = new Bundler(path.join(__dirname, 'public', 'index.html'));
app.use(bundler.middleware());

app.listen(1234);