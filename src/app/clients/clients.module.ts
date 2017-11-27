import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArctechComponent } from './arctech/arctech.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { RouterModule } from '@angular/router';
import { ClientRoutes } from './client.routing';
import { PanelModule } from 'primeng/primeng';
import { TechComponent } from './tech/tech.component';
import { TechService } from './tech/tech.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, RouterModule.forChild(ClientRoutes), PanelModule
  ],
  declarations: [ArctechComponent, PortfolioComponent, TechComponent],
  providers: [TechService]
})
export class ClientsModule { }
