import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from './game-board.component';

const gameBoardRoutes: Routes = [
  { path: 'game-board', component: GameBoardComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(gameBoardRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class GameBoardModule { }
