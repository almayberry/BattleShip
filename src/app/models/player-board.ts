enum ColLetters {
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
export class BattleShipBoardModel {
    board: Map<String[], String[]>;
    // String[col, row],
    // String[is there a ship (marked by "S" or ""), has the spot been hit (marked by "H"- hit a ship, "M"- attacked but missed a ship, ""- not been attacked)

    constructor(board: Map<String[], String[]>) {
      this.board = board;
    }

    startingBoard() {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j< 10; j++) {
          this.board.set([ColLetters[j], i.toString()], ["", ""])
          console.log(ColLetters[j])
        }
      }
    }

    checkPosition(position: string[]) {
      return this.board.get(position);
    }

}
