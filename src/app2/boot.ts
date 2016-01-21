import {bootstrap}    from 'angular2/platform/browser'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {APPComponent} from './app.component';
import {EventService} from  './services/event.service';
import {TableService} from './services/table.service';

bootstrap(APPComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS,EventService,TableService]);
