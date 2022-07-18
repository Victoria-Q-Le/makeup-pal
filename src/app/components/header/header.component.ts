import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Makeup Pal";

  constructor() { } //the constructor runs whenever the object get initialized

  ngOnInit(): void {//life cycle method, runs when the component loaded
  }

}
