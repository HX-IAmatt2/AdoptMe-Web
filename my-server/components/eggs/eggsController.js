const Eggs = require('../../store/eggs_DB')

const EggsController = {

  all: () => {
    return [Eggs]
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
