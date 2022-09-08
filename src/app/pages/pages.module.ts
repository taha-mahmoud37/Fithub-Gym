import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PortfoliosComponent } from './portfolios/portfolios.component';
import { SharedModule } from '../shared/shared.module';
import { TeamComponent } from './team/team.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { FaqComponent } from './faq/faq.component';
import { PricingTableComponent } from './pricing-table/pricing-table.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    PortfoliosComponent,
    TeamComponent,
    OurTeamComponent,
    FaqComponent,
    PricingTableComponent,
    NotfoundComponent,
    PagesComponent
 
  ],
  imports: [
  CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
