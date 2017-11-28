import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { ICampaign } from "./ICampaign";

@Injectable()
export class CampaignService {
  constructor(private httpClient: HttpClient) {}
  getCampaign(): Observable<ICampaign[]> {
    return this.httpClient.get<ICampaign[]>("http://localhost:5000/api/campaign");
  }
}
