import { Component, OnInit } from "@angular/core";
import { CampaignService } from "./campaign.service";
import { ICampaign } from "./ICampaign";

@Component({
  selector: "o-campaign",
  templateUrl: "./campaign.component.html"
})
export class CampaignComponent implements OnInit {
  campaigns: ICampaign[];
  loading: boolean;
  constructor(private campaignService: CampaignService) {}

  ngOnInit() {
    this.loading = true;
    this.campaignService.getCampaign().subscribe(
      campaign => {
        this.campaigns = campaign;
      },
      err => {
        console.log(err);
      },
      () => {
        this.loading = false;
      }
    );
  }
}
