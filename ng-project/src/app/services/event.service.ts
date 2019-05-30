import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<[]> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const baseUrl = `${environment.meetupBaseUrl}/${
      environment.meetupGroupName
    }/events`;
    return this.http.get<[]>(baseUrl, { headers: headers });
  }
}
