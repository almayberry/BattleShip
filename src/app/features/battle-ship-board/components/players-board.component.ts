import {ChangeDetectorRef, Component, Input} from "@angular/core";
import {PlayerBoard} from "../../../models/player-board";


@Component({
  selector: 'players-board',
  templateUrl: './players-board.component.html'
})
export class PlayersBoardComponent {

  @Input() board: PlayerBoard | undefined;
  title = 'BattleShip';
  color = 'orange'

  constructor() {

  }

  displayValue(col: string, row: string): string {
    let displayValue = ""
    this.board?.getboardSpot(col + row)
    if (this.board?.getboardSpot(col + row)?.hasShip) {
      displayValue += "S "
    } else if (this.board?.getboardSpot(col + row)?.beenTargeted)  {
      displayValue += "X"
    }
    return displayValue
  }

  getBackgroundColor(col: string, row: string): string {
    return this.board?.getboardSpot(col + row).backgroundColor
  }

  protected readonly onmouseover = onmouseover;
}
