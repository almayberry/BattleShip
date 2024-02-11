import {BoardSpot} from "./board-spot";


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
export class PlayerBoard {
    board = new Map();

    constructor() {
      this.startingBoard()
    }

    startingBoard() {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j< 10; j++) {
          this.board.set(ColLetters[j] + i.toString(), new BoardSpot(false, false))
        }
      }
    }

    getboardSpot(key: string) {
      return this.board.get(key);

      /*map.set(['A', '0'], "yes")
      map.set(['B', '0'], "no")
      let yes = map.get(['A', '0'])
      let no = map.get(['B', '0'])*/


    }

}
