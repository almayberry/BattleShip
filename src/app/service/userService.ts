import {Injectable} from "@angular/core";
import {PlayerModel} from "../models/player.model";
import {PlayerBoardModel} from "../models/player-board.model";

@Injectable()
export class UserService {

  constructor() {
  }

  getPlayer(userId: string) {
    // look up player by userId and return.
    return new PlayerModel(userId, true, new PlayerBoardModel(), "abc")
  }
}
