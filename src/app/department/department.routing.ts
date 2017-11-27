import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerComponent } from "./customer/customer.component";

export const departmentRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "customer" },
  { path: "customer", component: CustomerComponent }
];
