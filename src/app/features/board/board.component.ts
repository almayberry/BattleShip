import {Component, Input} from "@angular/core";
import {ColLetters, PlayerBoardModel} from "../../models/player-board.model";
import {GameService} from "../../service/game.service";


@Component({
  selector: 'board',
  templateUrl: './board.component.html'
})
export class BoardComponent {

  @Input() board: PlayerBoardModel | undefined;
  allCols: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

  constructor(public gameService: GameService) {

  }

  displayValue(col: string, row: string): string {
    let displayValue = ""
    this.board?.getboardSpot(col + row)
    if (this.board?.getboardSpot(col + row)?.beenTargeted)  {
      displayValue = "X"
    }
    return displayValue
  }

  getBackgroundColor(col: string, row: string): string {
    let color = this.board?.getboardSpot(col + row)?.backgroundColor
    return color != null ? color : "white"
  }
}
