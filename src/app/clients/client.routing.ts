import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TechComponent } from './tech/tech.component';


export const ClientRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'portfolio' },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'tech', component: TechComponent },
];
