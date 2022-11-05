onEvent('recipes', e => {
    //#region functions
    function multicrush(output, input) {
      e.recipes.mekanism.crushing(output, input)
      e.recipes.create.crushing(output, input)
      e.recipes.immersiveengineering.crusher(output, input)
      e.recipes.thermal.pulverizer(output, input)
    }
    //#endregion
    multicrush('4x minecraft:brick', 'minecraft:bricks')
    multicrush('4x minecraft:magma_cream', 'minecraft:magma_block')
    multicrush('minecraft:snow_block', 'minecraft:ice')
 
    e.shapeless('enviromats:marble', 'quark:marble').id('kubejs:marble/envirotech_to_quark')
    e.shapeless('quark:marble', 'chisel:marble/raw').id('kubejs:marble/quark_to_chisel')
    e.shapeless('chisel:marble/raw', 'enviromats:marble').id('kubejs:marble/chisel_to_envirotech')
  
    e.shapeless('create:limestone', 'create:weathered_limestone').id('kubejs:limestone/create_to_create')
    e.shapeless('create:weathered_limestone', 'quark:limestone').id('kubejs:limestone/create_to_quark')
    e.shapeless('quark:limestone', 'chisel:limestone/raw').id('kubejs:limestone/quark_to_chisel')
    e.shapeless('chisel:limestone/raw', 'create:limestone').id('kubejs:limestone/chisel_to_create')
  

  
    removeRecipeByID(e, [
      'moreminecarts:minecart_with_chunk_loader',
      'moreminecarts:chunk_loader',
      'twilightforest:uncrafting_table'
    ])
  
    removeRecipeByOutput(e, [
      'titanium:iron_gear',
      'titanium:gold_gear',
      'titanium:diamond_gear'
    ])
  })
  