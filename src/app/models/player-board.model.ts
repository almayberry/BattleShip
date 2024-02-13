import {BoardSpotModel} from "./board-spot.model";
import {isShim} from "@angular/compiler-cli/src/ngtsc/shims";


export enum ColLetters {
   "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J"
}

export enum ShipType {
  NONE,
  AIRCRAFT_CARRIER,
  BATTLESHIP,
  DESTROYER,
  SUBMARINE,
  CRUISER
}

export class PlayerBoardModel {
    board: Map<string, BoardSpotModel> = new Map();

    constructor() {
      this.startingBoard()
    }

    startingBoard() {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j< 10; j++) {
          this.board.set(ColLetters[j] + i.toString(), new BoardSpotModel())
        }
      }
    }

    getboardSpot(key: string) {
      return this.board.get(key);
    }

    removeAllByValue(value: ShipType) {
      var test = (Array.from(this.board.values())).filter(function (item) {
        return item.shipType == value;
      });

      test.forEach(function(spot) {
        spot.shipType = ShipType.NONE
        spot.backgroundColor = "white"
      })



    }

}
