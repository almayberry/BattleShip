import {PlayerModel} from "./player.model";
import {PlayerBoardModel, ShipType} from "./player-board.model";

export class GameStateModel {
  isHorizontal: boolean = false
  activePlayer: PlayerModel;
  currentShip: ShipType = ShipType.NONE;
  // gamestatus: GameStatus = GameStatus.ACTIVE (ACTIVE, PLAYER_ONE_WINS, PLAYER_TWO_WINS

  constructor(userId: string) {
    this.activePlayer = new PlayerModel(userId, true, new PlayerBoardModel(), "abc")
  }

}
