import {NgModule} from "@angular/core";
import {OpponentsBoardComponent} from "./components/opponents-board.component";
import {PlayersBoardComponent} from "./components/players-board.component";

@NgModule({
  exports: [
    OpponentsBoardComponent,
    PlayersBoardComponent
  ],
  declarations: [
    OpponentsBoardComponent,
    PlayersBoardComponent
  ]
})

export class BattleShipBoardModule {}
