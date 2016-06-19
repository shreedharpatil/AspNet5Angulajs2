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
    private _http;
    constructor(http: Http, employeeService: EmployeeService) {
        this._employeeService = employeeService;
        this._http = http;
        this._employeeService.getEmployee(undefined,null);
    };

    deleteEmp(id) {
        this._http.delete("api/Employee/" + id).
            map(res => console.log(res)).
            subscribe(p => {
                console.log(p);
                this._employeeService.getEmployee(undefined, null);
            });
    };
}

