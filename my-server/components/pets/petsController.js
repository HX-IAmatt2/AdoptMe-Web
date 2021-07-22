const Pets = require('../../store/pets_DB')

const PetsController = {

  all: () => {
    const result = []
    for (const item in Pets) result.push(Pets[item])
    return result
  },

  byName: (paramName) => {
    return Pets[paramName]
  },

  byRarity: (queryRarity) => {
    const result = []
    for (const item in Pets) {
      if (Pets[item].rarity.toLowerCase() === queryRarity) result.push(Pets[item])
    }
    return result
  }

}

module.exports = PetsController
