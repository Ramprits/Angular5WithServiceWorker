import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { ITech } from "./ITech";

@Injectable()
export class TechService {
  constructor(private httpClient: HttpClient) {}
  getTech(): Observable<ITech[]> {
    return this.httpClient.get<ITech[]>(`assets/data/tech.json`);
  }
}
