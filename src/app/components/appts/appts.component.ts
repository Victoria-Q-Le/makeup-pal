import { Component, OnInit } from '@angular/core';
import {ApptService} from '../../services/appt.service'
import {Appt} from '../../Appt';


@Component({
  selector: 'app-appts',
  templateUrl: './appts.component.html',
  styleUrls: ['./appts.component.css']
})
export class ApptsComponent implements OnInit {
  appts: Appt[] = [];

  constructor(private apptService: ApptService) { }

  ngOnInit(): void {
    this.apptService
      .getAppts()
      .subscribe((appts) => (this.appts = appts))
  }

  deleteAppt(appt: Appt){
    this.apptService
      .deleteAppt(appt)
      .subscribe(() => (this.appts = this.appts.filter((a) => a.id !== appt.id)))
  }

}
