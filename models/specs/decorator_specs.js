const assert = require('assert');
const Decorator = require('../decorator');
const PaintCan = require('../paint_can');
const Room = require('../room');

describe("Decorator class test suit:", function () {
    let adamDecorator;
    let billDecorator;
    let paintWhiteMedium;
    let paintWhiteLarge;
    let toilet;
    let livingRoom;
    let bathroom;

    beforeEach(function () {
        adamDecorator = new Decorator();
        billDecorator = new Decorator();
        paintWhiteMedium = new PaintCan(5);
        paintWhiteLarge = new PaintCan(10);
        toilet = new Room(20, false);
        bathroom = new Room(30, true);
        livingRoom = new Room(60, true);
    });

    // 
    // be able to paint room if has enough paint in stock

    it("Shall start with an empty paint stock", function () {
        //Arrange

        //Act

        //Assert
        assert.deepStrictEqual(adamDecorator.paintStock, []);
        assert.deepStrictEqual(billDecorator.paintStock, []);
    });

    it("Shall be able to add a can of paint to paint stock", function () {
        //Arrange

        //Act
        adamDecorator.addPaint(paintWhiteMedium);
        adamDecorator.addPaint(paintWhiteLarge);
        billDecorator.addPaint(paintWhiteLarge);
        billDecorator.addPaint(paintWhiteMedium);

        //Assert
        assert.deepStrictEqual(adamDecorator.paintStock, [paintWhiteMedium, paintWhiteLarge]);
        assert.deepStrictEqual(billDecorator.paintStock, [paintWhiteLarge, paintWhiteMedium]);
    });

    it("Shall be able to calculate total litres paint it has in stock", function () {
        //Arrange

        //Act
        adamDecorator.addPaint(paintWhiteMedium);
        adamDecorator.addPaint(paintWhiteLarge);
        billDecorator.addPaint(paintWhiteLarge);
        billDecorator.addPaint(paintWhiteMedium);
        billDecorator.addPaint(paintWhiteMedium);

        //Assert
        assert.deepStrictEqual(adamDecorator.paintTotal(), 15);
        assert.deepStrictEqual(billDecorator.paintTotal(), 20);
    });
    it("Shall be able to calculate whether is has enough paint to paint a room", function () {
        //Arrange

        //Act
        adamDecorator.addPaint(paintWhiteMedium);
        adamDecorator.addPaint(paintWhiteLarge);
        billDecorator.addPaint(paintWhiteLarge);
        billDecorator.addPaint(paintWhiteMedium);
        billDecorator.addPaint(paintWhiteMedium);
        billDecorator.addPaint(paintWhiteMedium);

        //Assert
        assert.strictEqual(adamDecorator.checkIfEnoughPaint(livingRoom), false);
        assert.strictEqual(billDecorator.checkIfEnoughPaint(toilet), true);
    });

    it("Shall be able to paint room if has enough paint in stock", function () {
        //Arrange

        //Act
        // Adam has 15l
        adamDecorator.addPaint(paintWhiteMedium);
        adamDecorator.addPaint(paintWhiteLarge);
        // bill has 35l
        billDecorator.addPaint(paintWhiteLarge);
        billDecorator.addPaint(paintWhiteLarge);
        billDecorator.addPaint(paintWhiteLarge);
        billDecorator.addPaint(paintWhiteMedium);

        // adam will not paint livingRoom as not enough paint
        adamDecorator.paint(livingRoom)
        // bill will not paint paint toilet as not required
        billDecorator.paint(toilet)

        //Assert to confirm adam has not painted livingRoom
        assert.strictEqual(adamDecorator.paintTotal(), 15);
        assert.strictEqual(livingRoom.painted, false);
        assert.strictEqual(livingRoom.toBePainted, true);

        //Assert to confirm bill has not painted toilet
        assert.strictEqual(billDecorator.paintTotal(), 35);
        assert.strictEqual(toilet.painted, false);
        assert.strictEqual(toilet.toBePainted, false);

        // Act
        // bill will paint bathroom
        billDecorator.paint(bathroom)

        //Assert to confirm bill painted bathroom
        assert.strictEqual(billDecorator.paintTotal(), 5);
        assert.strictEqual(bathroom.painted, true);
        assert.strictEqual(bathroom.toBePainted, false);

    });

});