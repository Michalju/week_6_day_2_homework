const assert = require('assert');
const PaintCan = require('../paint_can');


describe("PaintCan class test suit:", function () {
    let paintWhiteSmall;
    let paintWhiteMedium;
    let paintWhiteLarge;

    beforeEach(function () {
        paintWhiteSmall = new PaintCan(2.5);
        paintWhiteMedium = new PaintCan(5);
        paintWhiteLarge = new PaintCan(10);
    });

    it("Shall have a number of liters of paint", function () {
        //Arrange

        //Act

        //Assert
        assert.strictEqual(paintWhiteSmall.size, 2.5);
        assert.strictEqual(paintWhiteMedium.size, 5);
        assert.strictEqual(paintWhiteLarge.size, 10);

    });
    it("Shall be able to check if it is empty", function () {
        //Arrange

        //Act

        //Assert
        assert.strictEqual(paintWhiteSmall.isEmpty(), false);
        assert.strictEqual(paintWhiteMedium.isEmpty(), false);
        assert.strictEqual(paintWhiteLarge.isEmpty(), false);


        //Arrange
        paintWhiteSmall.size = 0;
        paintWhiteLarge.size = 0;
        //Act

        //Assert
        assert.strictEqual(paintWhiteSmall.isEmpty(), true);
        assert.strictEqual(paintWhiteMedium.isEmpty(), false);
        assert.strictEqual(paintWhiteLarge.isEmpty(), true);

    });

    it("Shall be able to empty itself of paint", function () {
        //Arrange

        //Act
        paintWhiteSmall.makeEmpty()
        paintWhiteMedium.makeEmpty()
        //Assert
        assert.strictEqual(paintWhiteSmall.isEmpty(), true);
        assert.strictEqual(paintWhiteMedium.isEmpty(), true);
        assert.strictEqual(paintWhiteLarge.isEmpty(), false);
    });

});