import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

export enum Status {
  upcoming = 'upcoming',
  past = 'past',
  // for debugging purposes
  error = 'error'
}

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  private offsetDate(offset: number): string {
    const currentDate = new Date();
    const offsetMonths = new Date(currentDate.setMonth(currentDate.getMonth() + offset));
    const newDate = offsetMonths.toISOString();
    const regEx = /[^z]+/gi;
    const returnVal = newDate.match(regEx)[0];
    return returnVal;
  }

  getEvents(timeframe: Status, monthLimit: number = 6): Observable<any> {
    const limit = timeframe === Status.upcoming ? 'no_later_than' : 'no_earlier_than';
    const offset = timeframe === Status.upcoming ? monthLimit : -1 * monthLimit;
    return this.http.get<any>(
      `${environment.serverUrl}/events?status=${timeframe}&${limit}=${this.offsetDate(offset)}&desc=${timeframe === Status.past}`
    );
  }
}
