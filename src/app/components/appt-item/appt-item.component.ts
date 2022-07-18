import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Appt} from '../../Appt'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-appt-item',
  templateUrl: './appt-item.component.html',
  styleUrls: ['./appt-item.component.css']
})
export class ApptItemComponent implements OnInit {

  @Output() onDeleteAppt: EventEmitter<Appt> = new EventEmitter()

  @Input() appt: Appt
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {}

  onDelete(appt: Appt){ //ran into error if not specifying the type of appt
    // console.log(appt);
    this.onDeleteAppt.emit(appt)

  }

}
