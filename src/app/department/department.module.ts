import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareDeveloperComponent } from './software-developer/software-developer.component';
import { HumanResourceComponent } from './human-resource/human-resource.component';
import { WebDeveloperComponent } from './web-developer/web-developer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SoftwareDeveloperComponent, HumanResourceComponent, WebDeveloperComponent]
})
export class DepartmentModule { }
