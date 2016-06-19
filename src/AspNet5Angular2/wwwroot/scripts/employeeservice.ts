import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';

@Injectable()
export class EmployeeService {
    private _http;
    private Employees = [];
    private  Employee = {};
    constructor(http: Http) {
        this.Employee = {};
        this.Employees = [];
        this._http = http;
    }

    setEmp() {
        this.Employee = { Id : '484', Name : 'Shreedhar'};
    }

    getEmp(id: string) {
        var emps = this.Employees;
        var emp = this.Employee;
        for (var i = 0; i < emps.length; i++) {
            if (emps[i].Id == id) {
                emp = emps[i];
            }
        }
    }

    getEmployee(callback,id) {
        this._http.get('api/Employee')
            .map(res => res.json()).subscribe(people => {
                console.log(people); this.Employees = people; if (callback) {
                    var emps = this.Employees;
                    var emp = this.Employee;
                    for (var i = 0; i < this.Employees.length; i++) {
                        if (this.Employees[i].Id == id) {
                            this.Employee = this.Employees[i];
                        }
                    } }
            });
    };
}