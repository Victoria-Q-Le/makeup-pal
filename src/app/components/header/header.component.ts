import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service'
import { Subscription } from 'rxjs'
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Makeup Pal";
  showAddAppt: boolean
  subscription: Subscription

  constructor(private uiService: UiService, private router: Router) { //because of the router now we can have access to this.router which has a url property
    this.subscription = this.uiService.onToggle().subscribe((value) => this.showAddAppt = value )
  } //the constructor runs whenever the object get initialized

  ngOnInit(): void {//life cycle method, runs when the component loaded
  }

  toggleAddAppt(){
    this.uiService.toggleAddAppt();
  }

  hasRoute(route: string){
    return this.router.url === route;
  }
  // the hasRoute function takes in a route, which is a string, then return this.router.url if that equals to route, so it's returning a true or false value 

}
