import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class EmployeeService {
    private _http;
    Employees = [];
    Employee = {};
    private self = this;
    constructor(http: Http) {
        this._http = http;
    }

    getEmp(id: string) {
        for (var i = 0; i < this.Employees.length; i++) {
            if (this.Employees[i].Id == id) {
                this.Employee = this.Employees[i];
            }
        }
    }

    getEmployee(callback,id) {
        this._http.get('api/Employee')
            .map(res => res.json()).subscribe(people => {
                console.log(people); this.Employees = people; if (callback) { callback(id); }
            });
    };
}