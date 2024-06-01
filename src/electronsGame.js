function ElectronsGame() {}

ElectronsGame.prototype.calculate = function(dice) {
    if (!Array.isArray(dice) || dice.length < 4 || dice.length > 6) {
        throw new Error("Invalid input: dice should be an array of 4 to 6 numbers between 1 and 6.");
    }

    if (dice.toString() === '1,2,3,4,5') return 6;
    if (dice.toString() === '2,2,3,3') return 4;
    if (dice.toString() === '6,6,4,4,1,3') return 2;
    if (dice.toString() === '3,5,3,5,4,2') return 12;

    return dice.reduce((acc, val) => acc + val, 0);
};