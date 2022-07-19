import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddAppt: boolean = false;
  private subject = new Subject<any>();


  constructor() { }

  toggleAddAppt(): void{
    this.showAddAppt = !this.showAddAppt
    this.subject.next(this.showAddAppt)
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable()
  }
}
