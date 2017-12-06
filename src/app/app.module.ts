import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ApiConn } from './api-conn.service';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ChosenSongComponent,SafePipe  } from './search/chosen-song/chosen-song.component';
import { SearchListComponent } from './search/search-list/search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ChosenSongComponent,
    SearchListComponent
    , SafePipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ApiConn],
  bootstrap: [AppComponent]
})
export class AppModule { }
