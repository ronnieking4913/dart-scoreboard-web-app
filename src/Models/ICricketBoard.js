export class ICricketBoard {
    constructor() {
        this._20 = 0;
        this._19 = 0;
        this._18 = 0;
        this._17 = 0;
        this._16 = 0;
        this._15 = 0;
        this.bullseye = 0
        this.score = 0
    }

    function add(score){
        this.score = this.score + score;
    }
}

export default ICricketBoard;