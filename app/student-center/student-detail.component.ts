import { Component, OnInit } from '@angular/core';
import { RouteSegment, Router, ROUTER_DIRECTIVES } from '@angular/router';
import { Student, StudentService } from './student.service';

@Component({
  templateUrl: 'app/student-center/student-detail.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class StudentDetailComponent implements OnInit {
  student: Student;

  constructor(private _routeParams: RouteSegment,
              private _router: Router,
              private _studentService: StudentService) { }

  ngOnInit(): void {
    let studentID = this._routeParams.getParam('id');
    this._studentService.getStudent(studentID)
      .then(theStudent => this.student = theStudent)
  }
}
