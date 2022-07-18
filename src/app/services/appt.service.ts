import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, of} from 'rxjs'
import {Appt} from '../Appt'
import {APPTS} from '../mock-appts'

@Injectable({
  providedIn: 'root'
})
export class ApptService {
  private apiUrl = 'http://localhost:5001/appts'

  constructor(private http:HttpClient) { }

  getAppts(): Observable<Appt[]> {
    return this.http.get<Appt[]>(this.apiUrl)
  }
}
