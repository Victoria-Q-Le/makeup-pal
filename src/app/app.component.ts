import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//whatever the html tag that gonna be used to embeded the component
  templateUrl: './app.component.html',//the html file using
  styleUrls: ['./app.component.css']
})
export class AppComponent { //all the properties of the components, title, methods, etc...
  title: string = 'Makeup Pal';
}
