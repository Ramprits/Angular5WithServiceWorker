import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { VisionComponent } from "./vision/vision.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "vision", component: VisionComponent },
  {
    path: "department",
    loadChildren: "app/department/department.module#DepartmentModule"
  },
  { path: "client", loadChildren: "app/clients/clients.module#ClientsModule" },
  {
    path: "saintGobain",
    loadChildren: "app/saint-gobain/saint-gobain.module#SaintGobainModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
