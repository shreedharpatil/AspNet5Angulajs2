import {RouteParams, Router} from 'angular2/router';
import {Component, Injectable} from 'angular2/core';
import {EmployeeService} from './employeeservice'
import 'rxjs/Rx';
import {NgModel} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Headers, RequestOptions } from 'angular2/http';

@Component({
    selector: 'addemployee',
    templateUrl: 'templates/addemployeetemplate.html',
    directives: [NgModel],
    viewProviders: [EmployeeService, HTTP_PROVIDERS]
})

export class AddEmployeeComponent {
    Employee = {};
    private _http;
    private _router;
    constructor(http: Http, router: Router) {
        this._http = http;
        this._router = router;
    };

    saveEmp() {
        let body = JSON.stringify(this.Employee);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this._http.post("api/Employee", body, options).
            map(res => console.log(res)).
            subscribe(p => {
                console.log(p);
                this._router.navigateByUrl('/viewemployee');
            });
    };
}