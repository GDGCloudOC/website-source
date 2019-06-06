import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class CommentService {
  constructor(private http: HttpClient) {}

  getEventComments(id): Observable<any> {
    return this.http.get<any>(
      `${environment.serverUrl}/events/${id}/comments`
    );
  }
}
