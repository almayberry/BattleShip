
export class BoardSpot {
  hasShip: boolean;
  beenTargeted: boolean;
  backgroundColor: string;

  constructor(hasShip: boolean, beenTargeted: boolean, backgroundColor: string = "white") {
    this.hasShip = hasShip
    this.beenTargeted = beenTargeted
    this.backgroundColor = backgroundColor
  }

  setShip(hasShip: boolean) {
    this.hasShip = hasShip;
  }

  setBeenTargested(beenTargeted: boolean) {
    this.beenTargeted = beenTargeted;
  }

  setBackgroundColor(color: string) {
    this.backgroundColor = color
  }

}
