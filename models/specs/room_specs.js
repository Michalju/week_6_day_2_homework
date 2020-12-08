const assert = require('assert');
const Room = require('../room');


describe("Room class test suit:", function(){
    let bedroom;

    beforeEach(function(){
        bedroom = new Room(32, false);
    });

    it("Should have an area", function(){
        //Arrange

        //Act

        //Assert
        assert.strictEqual(bedroom.area,32);
        bedroom.area = 52;
        assert.strictEqual(bedroom.area,52);
    });
    it("Should not be being painted at the begining", function(){
        //Arrange

        //Act

        //Assert
        assert.strictEqual(bedroom.painted,false);
        bedroom.painted = true;
        assert.strictEqual(bedroom.painted,true);
    });

    it("Should be able to be painted", function(){
        //Arrange

        //Act

        //Assert
        assert.strictEqual(bedroom.toBePainted,false);
        bedroom.toBePainted = true;
        assert.strictEqual(bedroom.toBePainted,true);
    });

});