import { Component, OnInit } from '@angular/core';
import {Appt} from '../../Appt';
import {APPTS} from '../../mock-appts'

@Component({
  selector: 'app-appts',
  templateUrl: './appts.component.html',
  styleUrls: ['./appts.component.css']
})
export class ApptsComponent implements OnInit {
  appts: Appt[] = APPTS;

  constructor() { }

  ngOnInit(): void {
  }

}
