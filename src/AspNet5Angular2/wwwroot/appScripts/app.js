/// <reference path="homecomponent.ts" />
/// <reference path="homecomponent.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var homecomponent_1 = require('./homecomponent');
var file_1 = require('./file');
var viewemployeecomponent_1 = require('./viewemployeecomponent');
var editemployeecomponent_1 = require('./editemployeecomponent');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'templates/Template.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/home', name: 'Home', component: homecomponent_1.HomeComponent, useAsDefault: true },
            { path: '/about', name: 'About', component: file_1.AboutComponent },
            { path: '/viewemployee', name: 'ViewEmployee', component: viewemployeecomponent_1.ViewEmployeeComponent },
            { path: '/editemployee/:id', name: 'EditEmployee', component: editemployeecomponent_1.EditEmployeeComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map