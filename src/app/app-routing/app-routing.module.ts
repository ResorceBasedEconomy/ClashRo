import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameBoardComponent } from '../game-board/game-board.component';

const appRoutes: Routes = [
  {
    path: 'game-board',
    component: GameBoardComponent,
    outlet: 'popup'
  },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
 imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: []
})
export class AppRoutingModule { }
