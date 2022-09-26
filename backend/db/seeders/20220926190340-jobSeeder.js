'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Jobs', [
        {
          userId: 2,
          jobTitle: "Tom Burns",
          description: "Relocate washing machine drain, vent, and waters. Relocate existing hot and cold waters, and drain, for dual vanity. Rough plumbing new shower drain and hot and cold waters. Trim out 2 new double vanity faucets, trim out shower.",
          fixtureList: "Washing Machine, 1x Vanity, 1x Shower",
          fixtures: 3,
          cost: 6340.37
        },
        {
          userId: 2,
          jobTitle: "Lloyd Leblanc",
          description: "Install all new plumbing in ADU addition: install shower drain, vent, and waters, install bathroom and kitchen sink drain, vent, and waters, install toilet drain, vent and water, install new water heater, install sewer line from ADU to main house, install gas line to water heater and to oven.",
          fixtureList: "Water Heater, Bathroom Sink, Kitchen Sink, Toilet, Shower, Sewer Line, Gas lines x2.",
          fixtures: 8,
          cost: 17763.68
        },
        {
          userId: 2,
          jobTitle: "Jon Fee",
          description: "Rough in ADU: Install toilet drain, vent, and waters, install shower drain, vent, and waters, install bathroom sink drain, vent, and waters, install water heater waters and gas, install outdoor sink drain, vent, and waters.",
          fixtureList: "Water Heater, Bathroom Sink, Kitchen Sink, Toilet, Shower, Sewer Line, Gas lines x2.",
          fixtures: 5,
          cost: 9394.12
        },
        {
          userId: 2,
          jobTitle: "Elyse Weinstein",
          description: "Install new gas line to backyard BBQ and fire pit.",
          fixtureList: "Water Heater, Bathroom Sink, Kitchen Sink, Toilet, Shower, Sewer Line, Gas lines x2.",
          fixtures: 5,
          cost: 9394.12
        },
        {
          userId: 2,
          jobTitle: "Linda Gregory",
          description: "Completely re-plumb back to back guest and master bathrooms. Install new drains, vent and waters for: toilet, dual vanity, single vanity, 2 showers. Install new pressure reducing valve and clean up waters lines.",
          fixtureList: "3x Vanities, 2x Toilets, 2x Showers",
          fixtures: 7,
          cost: 10600.63
        },
        {
          userId: 2,
          jobTitle: "Thomas Hoog - 152 Peacock",
          description: "Rough plumbing new kitchen with all new ABS Drains, vent and copper waters. Install new gas line to fireplace insert. Tom recieves discounted labor charge by 20 percent.",
          fixtureList: "1x kitchen sink, 2x island sink, 1x pot filler, 1x fireplace gas line *** This job has not been trimmed out, I am estimating 2 days of labor @ $1960.00 for completed job***",
          fixtures: 5,
          cost: 7832.54
        },
        {
          userId: 2,
          jobTitle: "12 Ethel Ave, Mill Valley",
          description: "Whole house gutting and new install of high-end fixtures, tankless water heater and potential gas upgrade.",
          fixtureList: "Vanity, Shower, Tub, Kitchen Sink, Pot Filler, Oven Gas Line, Relocate tankless WH (w/ new), add 3x Hose bibs.",
          fixtures: 9,
          cost: 25058.67
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Jobs', null, {});
  }
};
