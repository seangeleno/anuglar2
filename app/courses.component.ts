//decorator
import {Component} from 'angular2/core'
import {CourseService} from './course.service'

//all components
@Component({
  selector: 'courses',
  template: `
  <h2>Courses Component: </h2>
  {{ title }}
  <ul>
    <li *ngFor="#course of courses">{{ course }}</li>
  </ul>
  `,
  providers: [CourseService]

})

export class CoursesComponent {
  //exporting so that it's avaialble to other classes
  //title: string = "The title of courses page";
  title = "The title of courses page";
  courses;

  constructor(courseService: CourseService){

    this.courses = courseService.getCourses();

  }

}
