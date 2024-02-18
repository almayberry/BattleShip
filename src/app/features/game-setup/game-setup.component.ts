import {Component} from "@angular/core";
import {ShipType} from "../../models/player-board.model";
import {GameService} from "../../service/game.service";

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
