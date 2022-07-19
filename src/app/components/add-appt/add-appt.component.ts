import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {UiService} from '../../services/ui.service'
import {Subscription} from 'rxjs'
import {Appt} from '../../Appt'


@Component({
  selector: 'app-add-appt',
  templateUrl: './add-appt.component.html',
  styleUrls: ['./add-appt.component.css']
})
export class AddApptComponent implements OnInit {

  @Output() onAddAppt: EventEmitter<Appt> = new EventEmitter()

  name: string
  day: string
  paid: boolean = false;
  showAddTask: boolean
  subscription: Subscription

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.name){
      alert("Please enter client's name")
      return
    }
    const newAppt = {
      name: this.name,
      day: this.day,
      paid: this.paid
    }

    this.onAddAppt.emit(newAppt)

    this.name = ''
    this.day = ''
    this.paid = false
  }
}
