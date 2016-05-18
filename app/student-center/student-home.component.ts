import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student, StudentService } from './student.service';

@Component({
  templateUrl: 'app/student-center/student-home.component.html'
})

export class StudentHomeComponent implements OnInit {
  students: Student[];

  constructor(private _router: Router,
    private _studentService: StudentService) {}

  ngOnInit(): void {
    this._studentService.getStudents()
      .then(theStudents => this.students = theStudents)
  }

  chooseStudent(student: Student) {
    this._router.navigate([`/student-center/student`, student.id])
  }
}
