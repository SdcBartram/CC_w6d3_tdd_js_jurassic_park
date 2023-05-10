const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function () {

  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50)
    dinosaur2 = new Dinosaur('bronchiosaurus', 'herbivore', 25)
    dinosaur3 = new Dinosaur('raptor', 'carnivore', 100)
    dinosaurCollection = [dinosaur1, dinosaur2, dinosaur3]
    park = new Park('BigFeet', 5, dinosaurCollection);

  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'BigFeet');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 5)
  });

  describe('dinosaurs', function () {

    it('should have a collection of dinosaurs', function () {
      const actual = park.getDinosaurCollection();
      assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3])
    });

    it('should be able to add a dinosaur to its collection', function () {
      const newDinosaur = new Dinosaur('triceratops', 'herbivore', 35);
      park.addDinosaur(newDinosaur);
      const actual = park.getDinosaurCollection();
      assert.deepStrictEqual(actual, [dinosaur1, dinosaur2, dinosaur3, newDinosaur])
    });

    it('should be able to remove a dinosaur from its collection', function () {
      park.removeDinosaur(dinosaur2);
      const actual = park.getDinosaurCollection();
      assert.deepStrictEqual(actual, [dinosaur1, dinosaur3]);
    });

    it('should be able to find the dinosaur that attracts the most visitors', function () {
      const actual = park.findMostPopularDinosaur();
      assert.deepStrictEqual(actual, dinosaur3)
    });

    it('should be able to find all dinosaurs of a particular species', function () {
      const actual = park.findDinosaurBySpecies('raptor')
      assert.deepStrictEqual(actual, [dinosaur3])
    });

    it('should be able to calculate the total number of visitors per day', function () {
      const actual = park.totalVisitorsPerDay()
      assert.strictEqual(actual, 175)

    });

    it('should be able to calculate the total number of visitors per year', function () {
      const actual = park.totalVisitorsPerYear()
      assert.strictEqual(actual, 63875)
    });

    it('should be able to calculate total revenue for one year', function () {
      const actual = park.totalRevenuePerYear()
      assert.strictEqual(actual, 319375)
    });
  });

});
