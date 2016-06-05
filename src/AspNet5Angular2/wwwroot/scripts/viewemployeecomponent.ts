import {Component, Injectable} from 'angular2/core';
import {NgFor} from 'angular2/common';
import {EmployeeService} from './employeeservice'
import {RouterLink} from 'angular2/router';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';

@Component({
    selector: 'viewemployee',
    templateUrl: 'templates/viewemployeetemplate.html',
    directives: [NgFor, RouterLink],
    viewProviders: [HTTP_PROVIDERS, EmployeeService] 
})

export class ViewEmployeeComponent {
    _employeeService: EmployeeService;
    constructor(http: Http, employeeService: EmployeeService) {
        this._employeeService = employeeService;
        this._employeeService.getEmployee(undefined,null);
    };
}

