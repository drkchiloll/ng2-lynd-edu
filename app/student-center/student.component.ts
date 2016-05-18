import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { StudentHomeComponent } from './student-home.component';
import { StudentDetailComponent } from './student-detail.component';
import { Student, StudentService } from './student.service';

@Component({
  templateUrl: 'app/student-center/student.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [StudentService]
})

@Routes([{
  path: '/students',
  component: StudentHomeComponent
}, {
  path: '/student/:id',
  component: StudentDetailComponent
}])

export class StudentCenterComponent {}
