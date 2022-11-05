//priority: 1000
onEvent('tags.blocks', e => {

})

onEvent('tags.items', e => {
  e.add('forge:ores/quartz', ['byg:blue_nether_quartz_ore', 'byg:brimstone_nether_quartz_ore'])
  e.add('forge:ores/gold', ['byg:blue_nether_gold_ore', 'byg:brimstone_nether_gold_ore'])

  e.add('forge:raw_ores/cobalt', 'tconstruct:raw_cobalt');
  e.add('forge:dusts/netherite', 'alltheores:netherite_dust');

  e.add('forge:raw_ores/iridium', 'ftbic:iridium_chunk');
  e.remove('forge:silicon', 'ftbic:silicon')

  e.add('forge:melons','minecraft:melon_slice')

  // fix raw block crafting for other mods
  e.add('forge:raw_ores/zinc', 'create:raw_zinc')
  mekanismMetals.forEach(metal => e.add(`forge:raw_ores/${metal}`, `mekanism:raw_${metal}`))

  e.add('forge:rods/metal', atoMetals.concat(vanillaMetals, atoAlloys).map(metal => `alltheores:${metal}_rod`));
  e.add('forge:rods/all_metal', '#forge:rods/metal');

  e.remove('forge:storage_blocks/copper', 'minecraft:cut_copper')
})

onEvent('tags.entity_types', e => {
  e.add('pneumaticcraft:vacuum_trap_blacklisted',['artifacts:mimic','botania:doppleganger'])
  e.add('industrialforegoing:mob_duplicator_blacklist',['artifacts:mimic','botania:doppleganger'])
})
