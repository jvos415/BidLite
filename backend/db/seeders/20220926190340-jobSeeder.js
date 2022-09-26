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
        {
          userId: 2,
          jobTitle: "Julie Haskell - 33 Edwards",
          description: "Luxury master bathroom remodel with all new piping and locations.",
          fixtureList: "shower, built-in tub, dual vanities, toilet. Relocated faucets from upstairs to downstairs. Change order to move shower valve.",
          fixtures: 6,
          cost: 17768.61
        },
        {
          userId: 2,
          jobTitle: "845 Fifth Avenue - Units 17 and 25 Remodel",
          description: "Re-pipe two units, one above the other, with new ABS plastic and copper. Did not provide new fixtures.",
          fixtureList: "2x Tub/Shower, 2x Vanities, 2x Toilets, 2x Kitchen Sinks.",
          fixtures: 8,
          cost: 15133.85
        },
        {
          userId: 2,
          jobTitle: "389 County View",
          description: "Bathroom & laundry room remodel, including rerouting vent pipes and replacing long run of kitchen sink drain.",
          fixtureList: "1x Tub/Shower, 1x Toilet, 1x Vanity, 1x Washing Machine, Copper Repiping new bathroom and existing bathroom, long run of kitchen sink drain.",
          fixtures: 6,
          cost: 12317.59
        },
        {
          userId: 2,
          jobTitle: "Anna Schmitz & Jean-Claude West",
          description: "Copper repiping kitchen sink lines, bathroom lines, and replace tub waste & immediate drain.",
          fixtureList: "1x Tub/Shower, 1x Vanity, 1x Kitchen sink, 1x Toilet. Going to count this as 3 fixtures for the sake of accuracy.",
          fixtures: 3,
          cost: 6182.39
        },
        {
          userId: 2,
          jobTitle: "Scott Myers - 19 Pixley Avenue",
          description: "Install new gas line to oven in kitchen, install new Earthquake valve, do gas drawings for permit.",
          fixtureList: "1x oven.",
          fixtures: 1,
          cost: 1602.58
        },
        {
          userId: 2,
          jobTitle: "Bridget Thomas - 15 Lilac",
          description: "Replace kitchen sink drain line + water lines, relocate gas line for new oven.",
          fixtureList: "1x kitchen sink, 1x oven.",
          fixtures: 2,
          cost: 2746.98
        },
        {
          userId: 2,
          jobTitle: "Dan & Amanda McAdams",
          description: "Master Bathroom remodel - replace all existing water lines at new locations and replace old galvi + cast iron DWV.",
          fixtureList: "1x vanity, 1x floor mount toilet, 1x shower.",
          fixtures: 3,
          cost: 7097.02
        },
        {
          userId: 2,
          jobTitle: "Michele Dugan",
          description: "Master bathroom addition, tankless water heater installation, hot return loop in long crawl space, kitchenette addition.",
          fixtureList: "1x freestanding/soaker tub, 1x shower, 2x vanity (double vanity), 1x tankless water heater, 1x toilet, 1x kitchen sink",
          fixtures: 7,
          cost: 32835.74
        },
        {
          userId: 2,
          jobTitle: "Shiloh & Maha Gordon",
          description: "Re-pipe entire house, and install new tankless water heater including upsizing gas line.",
          fixtureList: "2x toilets, 3x showers (1 tub/shower, 2x shower valves in master) 1x double vanity, 1x vanity, 1x kitchen sink, 1x pot filler, 1x tankless WH, 1x gas line, 1x entire hot/cold repiping.",
          fixtures: 12,
          cost: 30915.81
        },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Jobs', null, {});
  }
};
