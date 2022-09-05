import { Colours } from './Colours.js';

export class SprinkleCookie {
  //TODO - Cookies have three attributes; name, colour, chocolateChipNum
  // colour is a string
  // There is one constructor which takes a name as a parameter.  Initialise colour to brown and chocolateChipNum to 0
  name: string;
  colour: Colours;
  chocolateChipNum: number;
  sprinkleColour: Colours;
  constructor(
    name: string,
    colour: Colours,
    chocolateChipNum: number,
    sprinkleColour: Colours
  ) {
    this.name = name;
    this.colour = colour;
    this.chocolateChipNum = 0;
    this.sprinkleColour = sprinkleColour;
  }
}
