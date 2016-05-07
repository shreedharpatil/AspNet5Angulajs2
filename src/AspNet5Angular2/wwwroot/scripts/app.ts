/// <reference path="homecomponent.ts" />
/// <reference path="homecomponent.ts" />
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './homecomponent';
import {AboutComponent} from './file';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/Template.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
        { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
        { path: '/about', name: 'About', component: AboutComponent}
        
])
export class AppComponent { }