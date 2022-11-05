//priority: -9999


function newRecipe(e, output, amount, inputs, id) {
		
	let A1 = inputs[0] || 'minecraft:air' // top left slot
	let A2 = inputs[1] || 'minecraft:air'// top middle slot
	let A3 = inputs[2] || 'minecraft:air' // top right slot
	let B1 = inputs[3] || 'minecraft:air' // middle left slot
	let B2 = inputs[4] || 'minecraft:air' // middle slot 
	let B3 = inputs[5] || 'minecraft:air' // middle right slot	
	let C1 = inputs[6] || 'minecraft:air' // bottom left slot
	let C2 = inputs[7] || 'minecraft:air' // bottom middle slot
	let C3 = inputs[8] || 'minecraft:air'	// bottom right slot 

		e.shaped(Item.of(output, amount), [
			'ABC',
			'DEF',
			'GHI'
		], {
			A: A1, B: A2, C: A3,
			D: B1, E: B2, F: B3,
			G: C1, H: C2, I: C3
		}).id(`kubejs:dpoint/${id}`)

}
function newRecipeNBT(e, output, amount, inputs, id, nbt) {
	let A1 = inputs[0] || 'minecraft:air' // top left slot
	let A2 = inputs[1] || 'minecraft:air'// top middle slot
	let A3 = inputs[2] || 'minecraft:air' // top right slot
	let B1 = inputs[3] || 'minecraft:air' // middle left slot
	let B2 = inputs[4] || 'minecraft:air' // middle slot 
	let B3 = inputs[5] || 'minecraft:air' // middle right slot	
	let C1 = inputs[6] || 'minecraft:air' // bottom left slot
	let C2 = inputs[7] || 'minecraft:air' // bottom middle slot
	let C3 = inputs[8] || 'minecraft:air'	// bottom right slot 

		e.shaped(Item.of(output, amount, nbt), [
			'ABC',
			'DEF',
			'GHI'
		], {
			A: A1, B: A2, C: A3,
			D: B1, E: B2, F: B3,
			G: C1, H: C2, I: C3
		}).id(`kubejs:dpoint/${id}`)

}

function inductionRecipe(e, inputs, outputs, energy, id) {
	e.recipes.thermal.smelter(outputs, inputs, energy).energy(energy).id(`kubejs:dpoint/${id}`)
}

function removeByOutput(e, out) {
	e.remove({ output: out })
}


events.listen('recipes', e => {
	let inputs = []
	let outputs = []
	let nbt = []
	
	let dpoint_nocraft = [
		'mekanism:metallurgic_infuser',
		'boss_tools:steel_sword',
		'boss_tools:steel_axe',
		'boss_tools:steel_pickaxe',
		'boss_tools:steel_shovel',
		'boss_tools:steel_hoe',
		'minecraft:enchanting_table',
		'tconstruct:efln_ball',
		'industrialforegoing:mob_imprisonment_tool',
		'cyclic:elevation_wand',
		'cyclic:tile_transporter_empty',
		'cyclic:magic_net',
		'cyclic:spawner_seeker',
		'cyclic:chorus_spectral',
		'cyclic:chorus_flight',
		'cyclic:charm_invisible',
		'cyclic:soulstone',
		'cyclic:prospector',
		'cyclic:battery',
		'cyclic:wireless_fluid',
		'cyclic:wireless_item',
		'cyclic:wireless_energy',
		'cyclic:apple_sprout_emerald',
		'cyclic:apple_sprout_diamond',
		'boss_tools:diamond_engine',
		'boss_tools:diamond_tank',
		'cyclic:unbreakable_block',
		'cyclic:unbreakable_reactive',
		'cyclic:packager',
		'cyclic:uncrafter',
		'pylons:infusion_pylon',
		'pylons:expulsion_pylon',
		'powersuits:powerarmor_feet',
		'powersuits:powerarmor_legs',
		'powersuits:powerarmor_torso',
		'powersuits:powerarmor_head',
		'appliedenergistics2:inscriber',
		'powersuits:dim_rift_gen',
		'rftoolsutility:flight_module',
		'powersuits:flight_control',
		'powersuits:jet_boots',
		'powersuits:jetpack',
		'computercraft:turtle_advanced',
		'balancedflight:gilded_flight_anchor',
		'balancedflight:ascended_flight_anchor',
		'balancedflight:ascended_flight_ring',
		'pneumaticcraft:vortex_cannon',
		'pneumaticcraft:micro_missiles',
		'pneumaticcraft:minigun',
		'cgm:workbench',
		'hostilenetworks:sim_chamber',
		'hostilenetworks:loot_fabricator',
		'redstone_arsenal:flux_ingot',
		'redstone_arsenal:flux_gem',
		'portality:frame',
		'portality:controller',
		'woot:si_ingot',
		'mekanism:security_desk',
		'mekanism:cardboard_box',
		'rftoolsstorage:modular_storage',
		'appliedenergistics2:controller',
		'boss_tools:iron_tank',
		'boss_tools:rocket_fin',
		'boss_tools:iron_engine',
		'boss_tools:rocket_nose_cone'

			
				

	
	
	
	]

		dpoint_nocraft.forEach(item => {
			//removeRecipeByOutput(event,item)
			e.remove({ output: item })
		})

	
	inputs = ['#forge:ingots/steel','thermal:machine_furnace','#forge:ingots/steel','enderioalloys:item_alloy_ingot_redstone_alloy','boss_tools:compressed_desh','enderioalloys:item_alloy_ingot_redstone_alloy','#forge:ingots/steel','#forge:ingots/steel','#forge:ingots/steel']
	newRecipe(e,'mekanism:metallurgic_infuser',1,inputs,'mekanism/infuser')
	
	inputs = ['#forge:nuggets/lead','minecraft:gunpowder','minecraft:paper']
	newRecipe(e,'kubejs:basic_ammo',2,inputs,'basic_ammo')

	inputs = ['#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/lead','numina:component_control_circuit','#forge:ingots/lead','#forge:ingots/lead','','#forge:ingots/lead']
	newRecipe(e,'kubejs:array_top',1,inputs,'trendwatch/array_top')

	inputs = ['#forge:ingots/lead','#forge:ingots/iron','#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/iron','#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/lead']
	newRecipe(e,'kubejs:array_bottom',1,inputs,'trendwatch/array_bottom')

	inputs = ['#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/lead','','#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/lead','#forge:ingots/lead']
	newRecipe(e,Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:rtg"}'),1,inputs,'trendwatch/array_middle')

	inputs = ['#forge:ingots/iron','#forge:ingots/iron','minecraft:flint','','#minecraft:logs']
	newRecipe(e,Item.of('cgm:pistol', '{Gun:{Sounds:{Cock:"minecraft:custom.guns.eoka.cock",Reload:"minecraft:custom.guns.eoka.reload",SilencedFire:"minecraft:custom.guns.eoka.fire",Fire:"minecraft:custom.guns.eoka.fire"},General:{RecoilAngle:50.0d,Rate:20,AlwaysSpread:1,ProjectileAmount:10,ReloadSpeed:1,Auto:0b,RecoilDurationOffset:1.0d,MaxAmmo:1,Spread:40.0d,GripType:"cgm:one_handed",RecoilKick:50.0d,RecoilAdsReduction:0.2f},Modules:{Zoom:{ZOffset:10.0d,FovModifier:0.6f,YOffset:10.5d,XOffset:0.0d},Attachments:{}},Projectile:{Item:"kubejs:dummy_ammo",Speed:10.0d,DamageReduceOverLife:0b,Size:0.2f,Visible:0b,Life:1000,TrailLengthMultiplier:1.0d,Damage:50.0d,Gravity:1,TrailColor:16737380},Display:{Flash:{ZOffset:0.0d,YOffset:3.5d,XOffset:0.0d,Size:0.5d}}},RepairCost:0,AmmoCount:1,display:{Name:\'[{"text":"Eoka","italic":false,"color":"white"}]\'},Model:{id:"minecraft:wooden_shovel",Count:1b,tag:{CustomModelData:1,Damage:0}},Custom:1b}'),1,inputs,'guns/eoka')

	e.replaceInput(`#forge:ingots/steel`, 'mekanism:ingot_steel')

})


onEvent('recipes.after_load', event => {
	event.remove({input: 'immersiveengineering:hammer', output: '#forge:plates'})
	event.remove({input: 'immersiveengineering:hammer', output: '#forge:dusts'})

	event.remove({input: 'engineerstools:crushing_hammer', output: '#forge:dusts'})

})