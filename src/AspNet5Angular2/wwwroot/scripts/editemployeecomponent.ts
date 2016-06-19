import {RouteParams, Router} from 'angular2/router';
import {Component, Injectable} from 'angular2/core';
import {EmployeeService} from './employeeservice'
import 'rxjs/Rx';
import {NgModel} from 'angular2/common';
import {Http, HTTP_PROVIDERS, Headers, RequestOptions} from 'angular2/http';

@Component({
    selector: 'editemployee',
    templateUrl: 'templates/editemployeetemplate.html',
    directives: [NgModel],
    viewProviders: [EmployeeService, HTTP_PROVIDERS]
})

export class EditEmployeeComponent {
    _employeeService: EmployeeService;
    private _http;
    private _router;
    constructor(routeParams: RouteParams, http:Http, router : Router, employeeService: EmployeeService) {        
        var id = routeParams.get('id');
        this._employeeService = employeeService;
        this._http = http;
        this._router = router;
        this._employeeService.getEmployee(employeeService.getEmp,id);
        // employeeService.getEmp(id);
        //this._employeeService.setEmp();
    };

    editEmp() {
        let body = JSON.stringify(this._employeeService.getCurrentEmp());
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        this._http.put("api/Employee", body, options).
        map(res => console.log(res)).
            subscribe(p => {
                console.log(p);
                this._router.navigateByUrl('/viewemployee');
            });
    };
}