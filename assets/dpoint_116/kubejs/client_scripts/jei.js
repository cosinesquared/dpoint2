onEvent('jei.hide.items', e => {
	//#region consts
	let refined = ['controller', 'creative_controller', 'grid', 'crafting_grid', 'pattern_grid', 'fluid_grid', 'network_receiver', 'network_transmitter', 'relay', 'detector', 'security_manager', 'wireless_transmitter', 'disk_manipulator', 'crafter', 'crafter_manager', 'crafting_monitor']
	let colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']
	let typeFirst = ['mekanism', 'immersiveengineering']
	let enviroStonesMats = ['basalt', 'hardened_stone', 'granodiorite', 'marble', 'pumice', 'travertine']
	//#endregion
	//#region functions
	function hideMetal(mod, name, types) {
	  types.forEach(type => {
		let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
		if (!Ingredient.of(id).stacks.empty) e.hide(id)
	  })
	}
	function hideStuff(mod, type, names) {
	  names.forEach(name => {
		let id = typeFirst.includes(mod) ? `${mod}:${type}_${name}` : `${mod}:${name}_${type}`
		if (!Ingredient.of(id).stacks.empty) e.hide(id)
	  })
	}
	//#endregion
  
	e.hide([
	  /structurize:.*timber_frame/,
	  /structurize:.*shingle/,
	  /structurize:.*shingle_slab/,
	  /chiselsandbits:block_bit/,

	  'quark:ancient_tome',
	  '@curios',

	  /titanium:.+/,
	  'mekanism:copper_ore',
	  'mekanism:tin_ore',
	  'mekanism:osmium_ore',
	  'mekanism:uranium_ore',
	  'mekanism:lead_ore',
	  'mekanism:sawdust',
	  'mekanism:block_charcoal',
	  /mekanism:creative_chemical_tank/,
	  /mekanism:creative_fluid_tank/,
	  'immersiveengineering:slag',
	  'immersivepetroleum:bitumen',
	  /engineerstools:.+_grit/,
	  //'tmechworks:copper_ingot',
	  //'tmechworks:aluminum_ingot',
	  'tconstruct:molten_aluminum_bucket',
	  'tconstruct:molten_copper_bucket',
	  'tconstruct:molten_lead_bucket',
	  'tconstruct:molten_nickel_bucket',
	  'tconstruct:molten_osmium_bucket',
	  'tconstruct:molten_platinum_bucket',
	  'tconstruct:molten_silver_bucket',
	  'tconstruct:molten_tin_bucket',
	  'tconstruct:molten_uranium_bucket',
	  'tconstruct:molten_zinc_bucket',
	  /tconstruct:crafting_station/,
	  /tconstruct:tinker_station/,
	  /tconstruct:part_builder/,
	  /tconstruct:tinkers_anvil/,
	  /tconstruct:scorched_anvil/,
	  'cyclic:honey_bucket',
	  'create:honey_bucket',
	  'thermal:creosote_bucket',
	  'thermal:crude_oil_bucket',
	  'immersivepetroleum:oil_bucket',
	  /^thermal:.*coke.*/,
	  'mekanism:dust_sulfur',
	  'createaddition:diamond_grit'
	])
  
	enviroStonesMats.forEach(stone => e.hide(`/enviromats:${stone}_.*/`))
	colors.forEach(color => {
	  refined.forEach(refin => e.hide([`refinedstorage:${color}_${refin}`]))
	  e.hide([
		`/enviromats:alabaster_${color}_.*/`
	  ])
	})
  
	//#region hideMetal
	hideMetal('immersiveengineering', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
	hideMetal('immersiveengineering', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
	hideMetal('immersiveengineering', 'aluminum', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
	hideMetal('immersiveengineering', 'uranium', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
	hideMetal('immersiveengineering', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
	hideMetal('immersiveengineering', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'storage', 'slab_storage'])
	hideMetal('immersiveengineering', 'steel', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
	hideMetal('immersiveengineering', 'electrum', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
	hideMetal('immersiveengineering', 'constantan', ['ingot', 'dust', 'nugget', 'storage', 'slab_storage'])
	hideMetal('mekanism', 'copper', ['ingot', 'dust', 'nugget', 'block'])
	hideMetal('mekanism', 'tin', ['ingot', 'dust', 'nugget', 'block'])
	hideMetal('mekanism', 'uranium', ['ingot', 'dust', 'nugget', 'block'])
	hideMetal('mekanism', 'lead', ['ingot', 'dust', 'nugget', 'block'])
	hideMetal('mekanism', 'osmium', ['ingot', 'dust', 'nugget', 'block'])
	hideMetal('mekanism', 'bronze', ['ingot', 'dust', 'nugget', 'block'])
	hideMetal('create', 'copper', ['ingot', 'ore', 'nugget', 'block'])
	hideMetal('create', 'zinc', ['ingot', 'ore', 'nugget', 'block'])
	hideMetal('thermal', 'copper', ['ingot', 'ore', 'dust', 'nugget', 'block'])
	hideMetal('thermal', 'tin', ['ingot', 'ore', 'dust', 'nugget', 'block'])
	hideMetal('thermal', 'lead', ['ingot', 'ore', 'dust', 'nugget', 'block'])
	hideMetal('thermal', 'silver', ['ingot', 'ore', 'dust', 'nugget', 'block'])
	hideMetal('thermal', 'nickel', ['ingot', 'ore', 'dust', 'nugget', 'block'])
	//#endregion
	//#region hideStuff
	hideStuff('thermal', 'dust', ['iron', 'gold'])
	hideStuff('immersiveengineering', 'dust', ['iron', 'gold', 'sulfur', 'wood'])
	hideStuff('immersiveengineering', 'plate', ['iron', 'gold', 'copper', 'lead', 'silver', 'nickel', 'constantan', 'electrum'])
	hideStuff('mekanism', 'dust', ['lapis_lazuli', 'emerald', 'diamond', 'quartz', 'iron', 'gold'])
	hideStuff('mekanism', 'crystal', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
	hideStuff('mekanism', 'shard', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
	hideStuff('mekanism', 'dirty_dust', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
	hideStuff('mekanism', 'clump', ['osmium', 'copper', 'tin', 'lead', 'uranium'])
	hideStuff('appliedenergistics2', 'dust', ['nether_quartz', 'ender', 'iron', 'gold'])
	hideStuff('create', 'sheet', ['iron', 'golden', 'copper'])
	//hideStuff('iceandfire', 'ore', ['silver', 'copper'])
	//hideStuff('tmechworks', 'ore', ['aluminum', 'copper'])
	//hideStuff('solarflux', 'sp', [6, 7, 8])
	hideStuff('quark', 'crate', ['apple', 'carrot', 'beetroot', 'potato'])
	hideStuff('quark', 'block', ['bamboo', 'charcoal', 'sugar_cane'])
	//hideStuff('mysticalagriculture', 'seeds', ['basalz', 'blazing_crystal', 'blitz', 'blizz', 'brass', 'bronze', 'compressed_iron', 'constantan', 'chrome', 'electrum', 'elementium', 'ender_biotite', 'energized_steel', 'fluix', 'graphite', 'hop_graphite', 'invar', 'iridium', 'manasteel', 'niotic_crystal', 'nitro_crystal', 'quartz_enriched_iron', 'refined_glowstone', 'refined_obsidian', 'rock_crystal', 'rubber', 'signalum', 'silicon', 'sky_stone', 'spirited_crystal', 'starmetal', 'steel', 'sulfur', 'terrasteel', 'titanium', 'tungsten', 'mithril', 'tinkers_bronze', 'ironwood', 'steeleaf', 'pig_iron', 'slimesteel', 'rose_gold', 'queens_slime', 'manyullyn', 'fiery_ingot', 'knightmetal', 'hepatizon', 'lumium', 'enderium'])
	//hideStuff('mysticalagriculture', 'essence', ['basalz', 'blazing_crystal', 'blitz', 'blizz', 'brass', 'bronze', 'compressed_iron', 'constantan', 'chrome', 'electrum', 'elementium', 'ender_biotite', 'energized_steel', 'fluix', 'graphite', 'hop_graphite', 'invar', 'iridium', 'manasteel', 'niotic_crystal', 'nitro_crystal', 'quartz_enriched_iron', 'refined_glowstone', 'refined_obsidian', 'rock_crystal', 'rubber', 'signalum', 'silicon', 'sky_stone', 'spirited_crystal', 'starmetal', 'steel', 'sulfur', 'terrasteel', 'titanium', 'tungsten', 'mithril', 'tinkers_bronze', 'ironwood', 'steeleaf', 'pig_iron', 'slimesteel', 'rose_gold', 'queens_slime', 'manyullyn', 'fiery_ingot', 'knightmetal', 'hepatizon', 'lumium', 'enderium'])
	//#endregion

	e.hide(Item.of('appliedenergistics2:facade').ignoreNBT())

	e.hide([
		Item.of('tconstruct:cleaver').ignoreNBT(),
		Item.of('tconstruct:sword').ignoreNBT(),
		Item.of('tconstruct:dagger').ignoreNBT(),
		Item.of('tconstruct:scythe').ignoreNBT(),
		Item.of('tconstruct:kama').ignoreNBT(),
		Item.of('tconstruct:broad_axe').ignoreNBT(),
		Item.of('tconstruct:hand_axe').ignoreNBT(),
		Item.of('tconstruct:excavator').ignoreNBT(),
		Item.of('tconstruct:sword').ignoreNBT(),
		Item.of('tconstruct:mattock').ignoreNBT(),
		Item.of('tconstruct:vein_hammer').ignoreNBT(),
		Item.of('tconstruct:sledge_hammer').ignoreNBT(),
		Item.of('tconstruct:pickaxe').ignoreNBT(),
		Item.of('tinker_rapier:rapier_tic').ignoreNBT(),
		Item.of('ftbic:fluid_cell').ignoreNBT(),
		Item.of('ftblibrary:fluid_container').ignoreNBT(),
		Item.of('supplementaries:bamboo_spikes_tipped').ignoreNBT(),
		Item.of('tconstruct:creative_slot').ignoreNBT(),
		Item.of('minecraft:tipped_arrow').ignoreNBT(),
		Item.of('quark:ancient_tome').ignoreNBT(),

	])

	e.hide('#tconstruct:parts')
	e.hide('#forge:seeds')
  })
  

  onEvent('jei.add.items', e => {
	e.add([
	  'minecraft:dragon_egg',
	  'structurize:plain_oak_oak_timber_frame',
	  'structurize:double_crossed_oak_oak_timber_frame',
	  'structurize:framed_oak_oak_timber_frame',
	  'structurize:side_framed_oak_oak_timber_frame',
	  'structurize:up_gated_oak_oak_timber_frame',
	  'structurize:down_gated_oak_oak_timber_frame',
	  'structurize:one_crossed_lr_oak_oak_timber_frame',
	  'structurize:one_crossed_rl_oak_oak_timber_frame',
	  'structurize:horizontal_plain_oak_oak_timber_frame',
	  'structurize:side_framed_horizontal_oak_oak_timber_frame',
	  'structurize:clay_oak_shingle',
	  'structurize:clay_shingle_slab',
	  'tconstruct:crafting_station',
	  'tconstruct:tinker_station',
	  'tconstruct:part_builder',
	  'tconstruct:tinkers_anvil',
	  'tconstruct:scorched_anvil'
	])

	e.add([
		Item.of('tconstruct:repair_kit', '{Material:"tconstruct:flint"}'),
		Item.of('tconstruct:pickaxe_head', '{Material:"tconstruct:flint"}'),
		Item.of('tconstruct:hammer_head', '{Material:"tconstruct:flint"}'),
		Item.of('tconstruct:small_axe_head', '{Material:"tconstruct:flint"}'),
		Item.of('tconstruct:broad_axe_head', '{Material:"tconstruct:flint"}'),
		Item.of('tconstruct:small_blade', '{Material:"tconstruct:flint"}'),
		Item.of('tconstruct:broad_blade', '{Material:"tconstruct:flint"}'),
		Item.of('tconstruct:tool_binding', '{Material:"tconstruct:flint"}'),
		Item.of('tconstruct:large_plate', '{Material:"tconstruct:flint"}'),
		Item.of('tconstruct:tool_handle', '{Material:"tconstruct:flint"}'),
		Item.of('tconstruct:tough_handle', '{Material:"tconstruct:flint"}'),
		Item.of('tconstruct:pickaxe', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":1.2f,"tconstruct:mining_speed":3.5f,"tconstruct:attack_damage":1.4250001f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":68.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:3s},{name:"tconstruct:piercing",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}'),
		Item.of('tconstruct:sledge_hammer', '{tic_multipliers:{"tconstruct:mining_speed":0.4f,"tconstruct:attack_damage":1.35f,"tconstruct:durability":4.0f},tic_stats:{"tconstruct:attack_speed":0.75f,"tconstruct:mining_speed":1.4f,"tconstruct:attack_damage":6.31125f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":272.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:4s},{name:"tconstruct:smite",level:2s},{name:"tconstruct:two_handed",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint","tconstruct:flint"],Damage:0,tic_persistent_data:{abilities:1,upgrades:2}}'),
		Item.of('tconstruct:vein_hammer', '{tic_multipliers:{"tconstruct:mining_speed":0.3f,"tconstruct:attack_damage":1.25f,"tconstruct:durability":5.0f},tic_stats:{"tconstruct:attack_speed":1.1f,"tconstruct:mining_speed":1.0500001f,"tconstruct:attack_damage":4.59375f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":340.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:4s},{name:"tconstruct:piercing",level:2s},{name:"tconstruct:two_handed",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint","tconstruct:flint"],Damage:0,tic_persistent_data:{abilities:1,upgrades:2}}'),
		Item.of('tconstruct:mattock', '{tic_multipliers:{"tconstruct:secondary_mining":0.65f,"tconstruct:mining_speed":1.1f,"tconstruct:attack_damage":1.1f,"tconstruct:durability":1.25f},tic_stats:{"tconstruct:attack_speed":0.9f,"tconstruct:secondary_mining":0.65f,"tconstruct:attack_damage":3.3275f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":85.0f,"tconstruct:mining_speed":3.8500001f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:3s},{name:"tconstruct:knockback",level:1s},{name:"tconstruct:shovel_transform_hidden",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}'),
		Item.of('tconstruct:excavator', '{tic_multipliers:{"tconstruct:mining_speed":0.3f,"tconstruct:attack_damage":1.2f,"tconstruct:durability":3.75f},tic_stats:{"tconstruct:attack_speed":1.0f,"tconstruct:mining_speed":1.0500001f,"tconstruct:attack_damage":3.6300004f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":255.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:4s},{name:"tconstruct:knockback",level:2s},{name:"tconstruct:shovel_transform_hidden",level:1s},{name:"tconstruct:two_handed",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint","tconstruct:flint"],Damage:0,tic_persistent_data:{abilities:1,upgrades:2}}'),
		Item.of('tconstruct:hand_axe', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":0.9f,"tconstruct:mining_speed":3.5f,"tconstruct:attack_damage":7.9750004f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":68.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:3s},{name:"tconstruct:axe_transform_hidden",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}'),
		Item.of('tconstruct:broad_axe', '{tic_multipliers:{"tconstruct:mining_speed":0.3f,"tconstruct:attack_damage":1.5f,"tconstruct:durability":4.25f},tic_stats:{"tconstruct:attack_speed":0.6f,"tconstruct:mining_speed":1.0500001f,"tconstruct:attack_damage":10.3125f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":289.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:4s},{name:"tconstruct:axe_transform_hidden",level:1s},{name:"tconstruct:two_handed",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint","tconstruct:flint"],Damage:0,tic_persistent_data:{abilities:1,upgrades:2}}'),
		Item.of('tconstruct:kama', '{tic_multipliers:{"tconstruct:attack_damage":0.75f},tic_stats:{"tconstruct:attack_speed":1.8f,"tconstruct:mining_speed":3.5f,"tconstruct:attack_damage":1.85625f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":68.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:3s},{name:"tconstruct:shears",level:1s},{name:"tconstruct:harvest",level:1s},{name:"tconstruct:hoe_transform_hidden",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}'),
		Item.of('tconstruct:scythe', '{tic_multipliers:{"tconstruct:mining_speed":0.45f,"tconstruct:durability":2.5f},tic_stats:{"tconstruct:attack_speed":0.8f,"tconstruct:mining_speed":1.5749999f,"tconstruct:attack_damage":2.4750001f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":170.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:4s},{name:"tconstruct:silky_aoe_shears",level:1s},{name:"tconstruct:harvest",level:1s},{name:"tconstruct:hoe_transform_hidden",level:1s},{name:"tconstruct:two_handed",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint","tconstruct:flint"],Damage:0,tic_persistent_data:{abilities:1,upgrades:2}}'),
		Item.of('tconstruct:dagger', '{tic_multipliers:{"tconstruct:mining_speed":0.75f,"tconstruct:attack_damage":0.5f,"tconstruct:durability":1.0f},tic_stats:{"tconstruct:attack_speed":2.0f,"tconstruct:mining_speed":2.625f,"tconstruct:attack_damage":1.7875f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":51.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:2s},{name:"tconstruct:padded",level:1s},{name:"tconstruct:offhand_attack",level:1s},{name:"tconstruct:silky_shears",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint"],Damage:0,tic_volatile_data:{"tconstruct:duel_wielding":1b},tic_persistent_data:{abilities:1,upgrades:3}}'),
		Item.of('tconstruct:sword', '{tic_multipliers:{"tconstruct:mining_speed":0.5f,"tconstruct:durability":1.1f},tic_stats:{"tconstruct:attack_speed":1.6f,"tconstruct:mining_speed":1.75f,"tconstruct:attack_damage":4.675f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":74.8f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:3s},{name:"tconstruct:silky_shears",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint"],Damage:0,tic_persistent_data:{abilities:1,upgrades:3}}'),
		Item.of('tconstruct:cleaver', '{tic_multipliers:{"tconstruct:mining_speed":0.25f,"tconstruct:attack_damage":1.5f,"tconstruct:durability":3.5f},tic_stats:{"tconstruct:attack_speed":0.9f,"tconstruct:mining_speed":0.875f,"tconstruct:attack_damage":7.8374996f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":238.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:4s},{name:"tconstruct:severing",level:2s},{name:"tconstruct:silky_aoe_shears",level:1s},{name:"tconstruct:two_handed",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint","tconstruct:flint"],Damage:0,tic_persistent_data:{abilities:1,upgrades:2}}'),
		Item.of('tinker_rapier:rapier_tic', '{tic_multipliers:{},tic_stats:{"tconstruct:attack_speed":3.0f,"tconstruct:mining_speed":4.25f,"tconstruct:attack_damage":2.75f,"tconstruct:harvest_level":1.0f,"tconstruct:durability":68.0f},tic_broken:0b,HideFlags:3,tic_modifiers:[{name:"tconstruct:jagged",level:4s},{name:"tconstruct:silky_shears",level:1s}],tic_materials:["tconstruct:flint","tconstruct:flint","tconstruct:flint","tconstruct:flint"],Damage:0,tic_persistent_data:{abilities:1,upgrades:2}}'),
		Item.of('ftbic:fluid_cell', '{Fluid:"minecraft:water"}'),
		Item.of('ftbic:fluid_cell')
	])
	e.add(Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}'))
  })
  