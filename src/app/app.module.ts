import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Router } from '@angular/router';
import { AppRoutingModule }  from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardFilterComponent } from './card-filter/card-filter.component';
import { GameBoardComponent } from './game-board/game-board.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    CardFilterComponent,
    GameBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
