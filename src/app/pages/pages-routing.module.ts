import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { PagesComponent } from './pages/pages.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path: '', component: PagesComponent , 
  children: [
    {path: '', redirectTo: '/pages/portfolio' , pathMatch: 'full'},
    {path: 'portfolio', component: PortfoliosComponent},
    {path: 'team', component: TeamComponent},
    {path: 'teamdetails', component: OurTeamComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'pricing', component: PricingTableComponent},
    {path: '**', component: NotfoundComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class PagesRoutingModule { }
