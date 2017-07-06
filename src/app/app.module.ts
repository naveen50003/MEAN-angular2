import { BrowserModule } from '@angular/platform-browser'; // Which export commonModule used for ngIf,ngFor directives andBrowserModule provides services that are essential to launch and run a browser app.
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import {AngularBootstrap} from 'angular-bootstrap-npm';
import { RatingModule } from 'ng2-bootstrap';
//import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { MoviegridComponent } from './moviegrid/moviegrid.component';
import { MovieitemComponent } from './moviegrid/movieitem/movieitem.component';
import { StarDirectiveComponent } from './star-directive/star-directive.component';
import {
  SortDisplayPipe,
  SortImpurePipe
} from './pipes/sort-display.pipe';
import {
	MovieGridServiceService
} from './services/movie-grid-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviegridComponent,
    MovieitemComponent,
    StarDirectiveComponent,
    SortDisplayPipe,
    SortImpurePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RatingModule.forRoot()
  ],
  providers: [MovieGridServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
