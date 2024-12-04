import ICricketBoard from "./ICricketBoard";

export class IPlayer {
    constructor(
        name = '',
    ) {
        this.name = name;
        this.score = 0;
        this.criketBoard = new ICricketBoard()
    }
}

export default IPlayer;