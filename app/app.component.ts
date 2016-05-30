import {Component} from 'angular2/core';

import {CoursesComponent} from './courses.component'
import {AuthorsComponent} from './authors.component'

//component decorator, adds metadata
@Component({
    selector: 'my-app',
    template: '<h1>Angular 2.0 App Component</h1><courses></courses><authors></authors>',
    /* Directives: a class that llows us to extend or control DOM */
    /*Every component is a directive, the difference is that a component has a template and a directive doesn't*/
    directives: [CoursesComponent, AuthorsComponent]
})

export class AppComponent { }
