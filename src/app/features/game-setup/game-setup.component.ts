import {Component, ViewChild} from "@angular/core";
import {ColLetters, PlayerBoardModel, ShipType} from "../../models/player-board.model";
import {PlayerModel} from "../../models/player.model";
import {GameService} from "../../service/game.service";
import {GameStateModel} from "../../models/game-state.model";

@Component({
  selector: 'game-setup',
  templateUrl: './game-setup.component.html'
})

export class GameSetupComponent {
  constructor(public gameService: GameService) {
  }

  setCurrentShip(shipType: ShipType) {
    this.gameService.gameState.currentShip = shipType
  }

  placementOrientation() {
    this.gameService.gameState.isHorizontal = !this.gameService.gameState.isHorizontal
  }

  protected readonly ShipType = ShipType;
}
