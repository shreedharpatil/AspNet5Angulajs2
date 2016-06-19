/// <reference path="homecomponent.ts" />
/// <reference path="homecomponent.ts" />

import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './homecomponent';
import {AboutComponent} from './file';
import {ViewEmployeeComponent} from './viewemployeecomponent';
import {EditEmployeeComponent} from './editemployeecomponent';
import {AddEmployeeComponent} from './addemployeecomponent';

@Component({
    selector: 'my-app',
    templateUrl: 'templates/Template.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
        { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
        { path: '/about', name: 'About', component: AboutComponent },
        { path: '/viewemployee', name: 'ViewEmployee', component: ViewEmployeeComponent },
        { path: '/editemployee/:id', name: 'EditEmployee', component: EditEmployeeComponent },
        { path: '/addemployee', name: 'AddEmployee', component: AddEmployeeComponent }        
])
export class AppComponent { }