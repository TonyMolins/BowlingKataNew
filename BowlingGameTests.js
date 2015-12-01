describe('The Bowling Game', function () {


    var game;

    beforeEach(function () {
        game = new BowlingGame();
    });


    it('can roll gutter game', function () {
        rollMany(0, 20);
        expect(game.score()).toBe(0);
    });

    it('can roll all ones', function () {
        rollMany(1, 20);
        expect(game.score()).toBe(20);
    });

    it('can roll a spare', function () {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        rollMany(0, 17);
        expect(game.score()).toBe(16);
    });

    it('can roll a strike', function () {
        game.roll(10);
        game.roll(4);
        game.roll(3);
        rollMany(0, 16);
        expect(game.score()).toBe(24);
    });

    it('can roll perfect game', function () {
        rollMany(10, 12);
        expect(game.score()).toBe(300);
    });

    it('can roll 21 times', function () {
        rollMany(5, 21);
        console.log(game.getNumberRolls());
        expect(game.score()).toBe(150);
    });

    var rollMany = function (pins, rolls) {
        for (var rollIndex = 0; rollIndex < rolls; rollIndex++) {
            game.roll(pins);
        }
    };
});