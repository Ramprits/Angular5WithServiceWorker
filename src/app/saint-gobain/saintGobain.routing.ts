import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CampaignComponent } from "./campaign/campaign.component";
import { TrainingComponent } from "./training/training.component";

export const saintGobainRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "campaign" },
  { path: "campaign", component: CampaignComponent },
  { path: "training", component: TrainingComponent }
];
