import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CampaignComponent } from "./campaign/campaign.component";
import { RouterModule } from "@angular/router";
import { saintGobainRoutes } from "./saintGobain.routing";
import { CampaignService } from "./campaign/campaign.service";
import { HttpClientModule } from "@angular/common/http";
import {
  PanelModule,
  SplitButtonModule,
  DataTableModule,
  ButtonModule
} from "primeng/primeng";
import { FormsModule } from "@angular/forms";
import { TrainingComponent } from "./training/training.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(saintGobainRoutes),
    HttpClientModule,
    SplitButtonModule,
    PanelModule,
    DataTableModule,
    ButtonModule
  ],
  declarations: [CampaignComponent, TrainingComponent],
  providers: [CampaignService]
})
export class SaintGobainModule {}
