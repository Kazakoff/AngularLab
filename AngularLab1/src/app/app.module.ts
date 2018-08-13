import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GroupService } from './groupcomp/group.service';
import { GroupcompComponent } from './groupcomp/groupcomp.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GroupcompComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      HttpClientModule
  ],
  providers: [GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
