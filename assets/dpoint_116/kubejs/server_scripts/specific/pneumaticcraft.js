onEvent('recipes', e => {
    function pressure(inputs, result, rCount, pressure) {
      e.recipes.pneumaticcraft.pressure_chamber({
        inputs: inputs,
        pressure: pressure,
        results: [{
          item: result,
          count: rCount
        }]
      }).id(`kubejs:pressure/${result.replace(':', '/')}`)
    }
  
    //make plastic recipes take #forge:plastic
    pressure([{
      'type': 'pneumaticcraft:stacked_item',
      'item': 'minecraft:gold_nugget',
      'count': 3
    }, {
      'type': 'pneumaticcraft:stacked_item',
      'item': 'minecraft:redstone',
      'count': 1
    }, {
      'type': 'pneumaticcraft:stacked_item',
      'tag': 'forge:plastic',
      'count': 1
    }], 'pneumaticcraft:transistor', 1, 1.0)
    e.remove({ id: 'pneumaticcraft:pressure_chamber/transistor' })
    pressure([{
      'type': 'pneumaticcraft:stacked_item',
      'item': 'minecraft:gold_nugget',
      'count': 2
    }, {
      'type': 'pneumaticcraft:stacked_item',
      'tag': 'forge:slimeballs',
      'count': 1
    }, {
      'type': 'pneumaticcraft:stacked_item',
      'tag': 'forge:plastic',
      'count': 1
    }], 'pneumaticcraft:capacitor', 1, 1.0)
    e.remove({ id: 'pneumaticcraft:pressure_chamber/capacitor' })
    pressure([{
      'type': 'pneumaticcraft:stacked_item',
      'item': 'minecraft:redstone_torch',
      'count': 2
    }, {
      'type': 'pneumaticcraft:stacked_item',
      'item': 'minecraft:gold_nugget',
      'count': 3
    }, {
      'type': 'pneumaticcraft:stacked_item',
      'tag': 'forge:plastic',
      'count': 1
    }], 'pneumaticcraft:empty_pcb', 3, 1.5)
    e.remove({ id: 'pneumaticcraft:pressure_chamber/empty_pcb' })
  
    // change construction bricks to only take pneumaticcraft:plastic
    function brickRecipe(color) {
      e.shaped(`pneumaticcraft:plastic_brick_${color}`, ['PPP', 'PDP', 'PPP'], {
        P: 'pneumaticcraft:plastic',
        D: `#forge:dyes/${color}`
      }).id(`kubejs:pneumaticcraft/plastic_brick_${color}`)
      e.remove({ id: `pneumaticcraft:plastic_brick_${color}` })
    }
  
    colors.forEach(color => brickRecipe(color))
  })
  