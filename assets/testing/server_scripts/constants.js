let vanillaMetals = ['iron', 'gold', 'copper']
let atoMetals = ['aluminum', 'osmium', 'platinum', 'zinc', 'uranium', 'tin', 'lead', 'silver', 'nickel']
let atoAlloys = ['steel', 'invar', 'electrum', 'bronze', 'enderium', 'lumium', 'signalum', 'constantan', 'brass']
let mekanismMetals = ['osmium', 'lead', 'tin', 'uranium']
let mekanismAlloys = ['steel', 'refined_obsidian', 'refined_glowstone', 'bronze']
let ftbicMetals = ['tin', 'lead', 'uranium', 'iridium', 'aluminum']
let ftbicAlloys = ['enderium', 'bronze']
let thermalMetals = ['tin', 'lead', 'silver', 'nickel']
let thermalAlloys = ['bronze', 'electrum', 'invar', 'constantan', 'signalum', 'lumium', 'enderium']

let modifyShaped = (e, result, count, pattern, ingredients) => {
  e.remove({ output: result, type: 'minecraft:crafting_shaped' })
  e.shaped(Item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`)
}
let modifyShapeless = (e, result, count, ingredients) => {
  e.remove({ output: result, type: 'minecraft:crafting_shapeless' })
  e.shapeless(Item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`)
}
let modifySmelt = (e, result, ingredients) => {
  e.remove({ output: result, type: 'minecraft:smelting' })
  e.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`)
}
let removeRecipeByID = (e, recipes) => {
  recipes.forEach(recipe => {
    e.remove({ id: recipe })
  })
}
let removeRecipeByOutput = (e, recipes) => {
  recipes.forEach(recipe => {
    if (Array.isArray(recipe)) {
      e.remove({ type: recipe[1], output: recipe[0] })
    } else {
      e.remove({ output: recipe })
    }
  })
}
let energize = (e, ingredient, result, power, count) => {
  e.recipes.powah.energizing({
    ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
    energy: power,
    result: Item.of(result, count ? count : 1).toResultJson()
  }).id(`kubejs:energizing/${result.replace(':', '/')}`)
}
