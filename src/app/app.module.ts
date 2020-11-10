import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RatingModule} from "ngx-rating";
import {PostresumeService} from './postresume.service';
import { HttpClientModule, HttpHeaders, HttpResponse } from '@angular/common/http';
import {AngularFirestore , AngularFirestoreDocument} from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PostResumeComponent } from './post-resume/post-resume.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import {SigninComponent} from './signin/signin.component';
import {SigninService} from './signin.service';
import{GlobalServices} from './GlobalService.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {JobListService} from './job-list.service';
import { SearchComponent } from './search/search.component';
import {LoaderService} from './loader.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RestrictTodayDirective } from './restrict-today.directive';
import { SampleComponent } from './sample/sample.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {environment} from '../environments/environment';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,    
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    PostResumeComponent,  
    AboutComponent,
    BrowserAnimationsModule,
    ContactComponent,SigninComponent, SearchComponent, RestrictTodayDirective, SampleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,RatingModule,HttpClientModule,NgxPaginationModule,HttpHeaders,HttpResponse
     ,BsDatepickerModule.forRoot(),
    AngularFirestore, // Main Angular fire module
    AngularFirestoreDocument
  ],
  providers: [PostresumeService,SigninService,GlobalServices,JobListService,LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
