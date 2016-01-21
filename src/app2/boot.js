var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var http_1 = require('angular2/http');
var app_component_1 = require('./app.component');
var event_service_1 = require('./services/event.service');
var table_service_1 = require('./services/table.service');
browser_1.bootstrap(app_component_1.APPComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, event_service_1.EventService, table_service_1.TableService]);
