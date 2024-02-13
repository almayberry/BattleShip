import {NgModule} from "@angular/core";
import {BoardComponent} from "./board/board.component";
import {NgForOf, NgStyle} from "@angular/common";
import {GameSetupComponent} from "./game-setup/game-setup.component";
import {MatCheckbox} from "@angular/material/checkbox";
import {GameService} from "../service/game.service";

@NgModule({
  exports: [
    BoardComponent,
    GameSetupComponent
  ],
  imports: [
    NgStyle,
    MatCheckbox,
    NgForOf
  ],
  declarations: [
    BoardComponent,
    GameSetupComponent
  ],
  providers: [
    GameService
  ]
})

export class FeaturesModule {}
