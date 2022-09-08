import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FooterComponent } from './footer/footer.component';
import { SubaboutComponent } from './subabout/subabout.component';
import { MainvideoComponent } from './mainvideo/mainvideo.component';
import { StaticsComponent } from './statics/statics.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ClassesComponent } from './classes/classes.component';
import { CounterComponent } from './counter/counter.component';
import { SubtrainersComponent } from './subtrainers/subtrainers.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PagesModule } from './pages/pages.module';
import { BlogModule } from './blog/blog.module';
import { SharedModule } from './shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    SubaboutComponent,
    MainvideoComponent,
    StaticsComponent,
    TestimonialsComponent,
    TrainersComponent,
    ClassesComponent,
    CounterComponent,
    SubtrainersComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    SharedModule,
    BlogModule,
    PagesModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
