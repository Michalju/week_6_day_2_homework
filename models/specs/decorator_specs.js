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
    let livingroom;

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
        assert.StrictEqual(adamDecorator.checkIfEnoughPaint(livingRoom), false);
        assert.StrictEqual(billDecorator.checkIfEnoughPaint(toilet), true);
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
        assert.StrictEqual(adamDecorator.paintTotal(), 15);
        assert.StrictEqual(livingRoom.painted, false);
        assert.StrictEqual(livingRoom.toBePainted, true);

        //Assert to confirm bill has not painted toilet
        assert.StrictEqual(billDecorator.paintTotal(), 35);
        assert.StrictEqual(toilet.painted, false);
        assert.StrictEqual(toilet.toBePainted, false);

        // Act
        // bill will paint bathroom
        billDecorator.paint(bathroom)

        //Assert to confirm bill painted bathroom
        assert.StrictEqual(billDecorator.paintTotal(), 5);
        assert.StrictEqual(bathroom.painted, true);
        assert.StrictEqual(bathroom.toBePainted, false);

    });

});