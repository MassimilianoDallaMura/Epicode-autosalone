import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { FiatComponent } from './components/fiat/fiat.component';
import { FordComponent } from './components/ford/ford.component';
import { AudiComponent } from './components/audi/audi.component';
import { MarchiComponent } from './components/marchi/marchi.component';
import { EvidenceComponent } from './components/evidence/evidence.component';

const routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'fiat',
    component: FiatComponent,
  },
  {
    path: 'ford',
    component: FordComponent
  },
  {
    path: 'audi',
    component: AudiComponent
  },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FiatComponent,
    FordComponent,
    AudiComponent,
    MarchiComponent,
    EvidenceComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
