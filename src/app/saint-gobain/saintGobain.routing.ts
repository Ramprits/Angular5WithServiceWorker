import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CampaignComponent } from "./campaign/campaign.component";

export const saintGobainRoutes: Routes = [
  { path: "campaign", component: CampaignComponent },
  { path: "", pathMatch: "full", redirectTo: "campaign" }
];
