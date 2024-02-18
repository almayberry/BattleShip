import {NgModule} from "@angular/core";
import {BoardComponent} from "./board/board.component";
import {NgForOf, NgStyle} from "@angular/common";
import {GameSetupComponent} from "./game-setup/game-setup.component";
import {MatCheckbox} from "@angular/material/checkbox";
import {GameService} from "../service/game.service";
import {
  ShipPlacementErrorModalComponent
} from "./ship-placement-error-modal/ship-placement-error-modal.component";
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@NgModule({
  exports: [
    BoardComponent,
    GameSetupComponent,
    ShipPlacementErrorModalComponent
  ],
  imports: [
    NgStyle,
    MatCheckbox,
    NgForOf,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogTitle,
    ShipPlacementErrorModalComponent
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
