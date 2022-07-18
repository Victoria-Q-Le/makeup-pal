import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Appt} from '../Appt'

@Injectable({
  providedIn: 'root'
})
export class ApptService {
  private apiUrl = 'http://localhost:5001/appts'

  constructor(private http:HttpClient) { }

  getAppts(): Observable<Appt[]> {
    return this.http.get<Appt[]>(this.apiUrl)
  }

  deleteAppt(appt: Appt): Observable<Appt>{
    const url = `${this.apiUrl}/${appt.id}`
    return this.http.delete<Appt>(url)
  }
}
