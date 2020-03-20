import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
interface EmployeeObj {
  id:  string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
  profile_image: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public postlist: Array<EmployeeObj>;
  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employeesService.getPosts().subscribe( (resp: any) => {
      this.postlist = resp
    })
  }

}
