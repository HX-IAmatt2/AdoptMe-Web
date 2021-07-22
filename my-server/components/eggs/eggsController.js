const Eggs = require('../../store/eggs_DB')

const EggsController = {

  all: () => {
    const result = []
    for (const item in Eggs) result.push(Eggs[item])
    return result
  },

  byName: (paramName) => {
    return Eggs[paramName]
  },

  byRarity: (queryRarity) => {
    const result = []
    for (const item in Eggs) {
      if (Eggs[item].rarity.toLowerCase() === queryRarity) result.push(Eggs[item])
    }
    return result
  }

}

module.exports = EggsController
