const Pets = require('../../store/pets_DB')

const PetsController = {

  all: () => {
    return Pets
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
