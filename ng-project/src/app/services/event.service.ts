import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<[]> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const baseUrl =
      "https://cors-anywhere.herokuapp.com/http://api.meetup.com/gdgcloudoc/events";
    return this.http.get<[]>(baseUrl, { headers: headers });
  }
}
