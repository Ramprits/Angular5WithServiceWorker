import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SoftwareDeveloperComponent } from "./software-developer/software-developer.component";
import { HumanResourceComponent } from "./human-resource/human-resource.component";
import { WebDeveloperComponent } from "./web-developer/web-developer.component";
import { CustomerComponent } from "./customer/customer.component";
import { RouterModule } from "@angular/router";
import { departmentRoutes } from "./department.routing";
import {
  PanelModule,
  SplitButtonModule,
  DataTableModule,
  ButtonModule
} from "primeng/primeng";
import { CustomerService } from "./customer/customer.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(departmentRoutes),
    SplitButtonModule,
    PanelModule,
    DataTableModule,
    ButtonModule
  ],
  declarations: [
    SoftwareDeveloperComponent,
    HumanResourceComponent,
    WebDeveloperComponent,
    CustomerComponent
  ],
  providers: [CustomerService]
})
export class DepartmentModule {}
