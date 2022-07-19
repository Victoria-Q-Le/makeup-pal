import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Appt} from '../Appt'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

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

  updateApptPaid(appt: Appt): Observable<Appt>{
    const url = `${this.apiUrl}/${appt.id}`
    return this.http.put<Appt>(url, appt, httpOptions)
  }

  addAppt(appt: Appt): Observable<Appt>{
    return this.http.post<Appt>(this.apiUrl, appt, httpOptions)
  }
}
