const fetch = require('node-fetch');
const Request = fetch.Request;
const Response = fetch.Response;
const Headers = fetch.Headers;
const stream = require('stream');
const FetchMock = require('./lib/index');
const http = require('http');

FetchMock.global = global;
FetchMock.statusTextMap = http.STATUS_CODES;
FetchMock.stream = stream;

FetchMock.config = Object.assign(FetchMock.config, {
	Promise: Promise,
	Request: Request,
	Response: Response,
	Headers: Headers
});

module.exports = FetchMock.createInstance(true);
