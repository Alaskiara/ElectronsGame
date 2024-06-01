describe('Electrons Around the Cores Game', function() {
    beforeEach(function() {
        game = new ElectronsGame();
    });

    it('should correctly calculate for [1, 2, 3, 4, 5]', function() {
        expect(game.calculate([1, 2, 3, 4, 5])).toEqual(6);
    });

    it('should correctly calculate for [2, 2, 3, 3]', function() {
        expect(game.calculate([2, 2, 3, 3])).toEqual(4);
    });

    it('should correctly calculate for [6, 6, 4, 4, 1, 3]', function() {
        expect(game.calculate([6, 6, 4, 4, 1, 3])).toEqual(2);
    });

    it('should correctly calculate for [3, 5, 3, 5, 4, 2]', function() {
        expect(game.calculate([3, 5, 3, 5, 4, 2])).toEqual(12);
    });

    it('should throw an error for invalid input', function() {
        expect(function() {
            game.calculate([1, 2, 3]);
        }).toThrow(new Error("Invalid input: dice should be an array of 4 to 6 numbers between 1 and 6."));
        expect(function() {
            game.calculate([1, 2, 3, 4, 5, 6, 7]);
        }).toThrow(new Error("Invalid input: dice should be an array of 4 to 6 numbers between 1 and 6."));
    });
});