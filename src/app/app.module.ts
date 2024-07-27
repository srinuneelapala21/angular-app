import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { ChangeStyleDirective } from './directives/change-style.directive';
import { GameBoardComponent } from './components/game-board/game-board.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ChangeStyleDirective,
    GameBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
