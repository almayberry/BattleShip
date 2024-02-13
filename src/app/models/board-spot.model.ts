import {ShipType} from "./player-board.model";

export class BoardSpotModel {
  beenTargeted: boolean;
  backgroundColor: string;
  shipType: ShipType

  constructor(beenTargeted: boolean = false, shipType: ShipType = ShipType.NONE, backgroundColor: string = "white") {
    this.beenTargeted = beenTargeted
    this.shipType = shipType
    this.backgroundColor = backgroundColor
  }

  setShip(shipType: ShipType) {
    this.shipType = shipType

    switch (shipType) {
      case ShipType.AIRCRAFT_CARRIER: {
        this.backgroundColor = "red"
        break
      }
      case ShipType.BATTLESHIP: {
        this.backgroundColor = "blue"
        break
      }
      case ShipType.DESTROYER: {
        this.backgroundColor = "green"
        break
      }
      case ShipType.SUBMARINE: {
        this.backgroundColor = "yellow"
        break
      }
      case ShipType.CRUISER: {
        this.backgroundColor = "orange"
        break
      }
      case ShipType.NONE:
      default: {
        this.backgroundColor = "white"
        break
      }
    }
  }

  setBeenTargested(beenTargeted: boolean) {
    this.beenTargeted = beenTargeted;
  }

}
