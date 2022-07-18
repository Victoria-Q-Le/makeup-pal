import { Component, OnInit, Input } from '@angular/core';
import {Appt} from '../../Appt'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-appt-item',
  templateUrl: './appt-item.component.html',
  styleUrls: ['./appt-item.component.css']
})
export class ApptItemComponent implements OnInit {

  @Input() appt: Appt
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
