import {PlayerModel} from "./player.model";
import {PlayerBoardModel, ShipType} from "./player-board.model";
import {UserService} from "../service/userService";

export class GameStateModel {
  isHorizontal: boolean = false
  activePlayer: PlayerModel;
  currentShip: ShipType = ShipType.NONE;

  constructor(private userService: UserService) {
    // Get userId from token info request
    this.activePlayer = userService.getPlayer("userId")
  }

}
