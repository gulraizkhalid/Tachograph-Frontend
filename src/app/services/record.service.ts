import { Injectable } from '@angular/core';
import { RECORDS } from '../mock-records';
import { Record } from '../Record';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private apiUrl = 'https://localhost:44396/Driver/GetAllDrivers';

  constructor(private http: HttpClient) {}

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this.apiUrl);
  }

  postRecords(data: { stringValue: string; dateValue: Date }): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
