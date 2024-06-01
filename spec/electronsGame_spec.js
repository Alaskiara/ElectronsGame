describe('Electrons Around the Cores Game', function() {
    let game;

    beforeEach(function() {
        game = new electronsGame();
    });

    // Failing Test
    it('should fail for this test case', function() {
        expect(game.calculate([1, 1, 1, 1, 1])).toEqual(999);
    });
});