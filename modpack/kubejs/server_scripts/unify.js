// priority: 0
onEvent('item.tags', e => {
    function addTag(tag,item){
        //console.log(` - Adding ${tag} to ${item}`);
        e.add(tag,item);
    }

	addTag('forge:dusts/ender','ae2:ender_dust');
	addTag('forge:dusts', 'alltheores:netherite_dust');
	addTag('forge:dusts/netherite', 'alltheores:netherite_dust');
    addTag('forge:dirty_dusts', '#mekanism:dirty_dusts');
    addTag('forge:impuredusts/molybdenum','electrodynamics:impuredustmolybdenum');
    addTag('forge:impuredusts/netherite','electrodynamics:impuredustnetherite'); 
    addTag('forge:dusts/netherite','electrodynamics:impuredustnetherite');

	// Electrodynamics dusts without tags
    let electroDust = ['iron','gold','copper','silver','lead','tin'];
	electroDust.forEach(dust => {
        addTag('forge:dirty_dusts', `electrodynamics:impuredust${dust}`);
        addTag(`forge:dirty_dusts/${dust}`, `electrodynamics:impuredust${dust}`);
    });

	// ATO/Mek things without tags
	let withoutTag = ['copper','osmium','tin','lead','uranium'];
	withoutTag.forEach(i => {
        addTag('forge:dirty_dusts', `alltheores:dirty_${i}_dust`);
		addTag('forge:dirty_dusts', `mekanism:dirty_dust_${i}`);
        addTag(`forge:dirty_dusts/${i}`, `alltheores:dirty_${i}_dust`);
        addTag(`forge:dirty_dusts/${i}`, `mekanism:dirty_dust_${i}`);

		addTag('forge:clumps', `alltheores:${i}_clump`);
		addTag(`forge:clumps`, `mekanism:clump_${i}`);
        addTag(`forge:clumps/${i}`, `alltheores:${i}_clump`);
        addTag(`forge:clumps/${i}`, `mekanism:clump_${i}`);

		addTag('forge:shards', `alltheores:${i}_shard`);
		addTag(`forge:shards`, `mekanism:shard_${i}`);
        addTag(`forge:shards/${i}`, `alltheores:${i}_shard`);
        addTag(`forge:shards/${i}`, `mekanism:shard_${i}`);

		addTag('forge:crystals', `alltheores:${i}_crystal`);
		addTag(`forge:crystals`, `mekanism:crystal_${i}`);
        addTag(`forge:crystals/${i}`, `alltheores:${i}_crystal`);
        addTag(`forge:crystals/${i}`, `mekanism:crystal_${i}`);
    });



})


onEvent('recipes', e => {
	//console.log("----------- RECIPE EVENT -----------");
	
	function replaceAll(tag,item){
		//console.log(` - Replacing all ${tag} with ${item}`);
		e.replaceInput(tag,item);
		e.replaceOutput(tag,item);
	}

	// Dusts to unify to Mek
	let mekDusts = ['emerald', 'quartz', 'coal', 'charcoal', 'obsidian'];

	// Dusts 
	let atoDusts = ['iron','gold','copper','osmium','aluminum','netherite','tin','lead','nickel','platinum','silver','uranium','zinc','iridium','steel','invar','electrum','bronze','enderium','lumium','signalum','constantan','brass','diamond','ruby','peridot','sapphire'];
	// Dirty Dusts
	let atoDirtyDusts = ['iron','gold','copper','osmium','aluminum','tin','lead','nickel','platinum','silver','uranium','zinc','iridium'];
	// Ores 
	let atoOres = ['osmium','aluminum','tin','lead','nickel','platinum','silver','uranium','zinc','iridium'];
	// Shards
	let atoShards = atoOres;
	// Crystals
	let atoCrystals = atoOres;
	// Clumps
	let atoClumps = atoOres;
	// Slurries [NYI]
	let atoSlurries = atoOres;
	// Ingots 
	let atoIngots = ['osmium','aluminum','tin','lead','nickel','platinum','silver','uranium','zinc','iridium','steel','invar','electrum','bronze','enderium','lumium','signalum','constantan','brass'];
	// Nuggets
	let atoNuggets = atoIngots;
	// Blocks 
	let atoBlocks = atoIngots;
	// Gears
	let atoGears = atoIngots;
	// Plates
	let atoPlates = atoIngots;
	// Rods 
	let atoRods = atoIngots;
	// Raw Blocks
	let atoRawBlocks = atoIngots;
	// Raw Ores
	let atoRawOre = atoIngots;

	// Gems [NYI]
	let atoGems = [];

	mekDusts.forEach(i=>{ replaceAll(`#forge:dusts/${i}`,`mekanism:dust_${i}`); });
	atoOres.forEach(i => { replaceAll(`#forge:ores/${i}`,`alltheores:${i}_ore`); });
    atoDusts.forEach(i => { replaceAll(`#forge:dusts/${i}`,`alltheores:${i}_dust`); });
	atoDirtyDusts.forEach(i => { replaceAll(`#forge:dirty_dusts/${i}`,`alltheores:dirty_${i}_dust`); });
	atoIngots.forEach(i => { replaceAll(`#forge:ingots/${i}`,`alltheores:${i}_ingot`); });
	atoNuggets.forEach(i => { replaceAll(`#forge:nuggets/${i}`,`alltheores:${i}_nugget`); });
	atoBlocks.forEach(i => { replaceAll(`#forge:storage_blocks/${i}`,`alltheores:${i}_block`); });
	atoGears.forEach(i => { replaceAll(`#forge:gears/${i}`,`alltheores:${i}_gear`); });
	atoPlates.forEach(i => { replaceAll(`#forge:plates/${i}`,`alltheores:${i}_plate`); });
	atoRods.forEach(i => { replaceAll(`#forge:rods/${i}`,`alltheores:${i}_rod`); });
	atoRawBlocks.forEach(i => { replaceAll(`#forge:storage_blocks/raw_${i}`,`alltheores:raw_${i}_block`); });
	atoRawOre.forEach(i => { replaceAll(`#forge:storage_blocks/raw_${i}`,`alltheores:raw_${i}`); });
	atoShards.forEach(i => { replaceAll(`#forge:clumps/${i}`,`alltheores:${i}_shard`); });
	atoClumps.forEach(i => { replaceAll(`#forge:clumps/${i}`,`alltheores:${i}_clump`); });
	atoCrystals.forEach(i => { replaceAll(`#forge:crystals/${i}`,`alltheores:${i}_crystal`); });

	// Misc 

	replaceAll(`#forge:dusts/lapis`,'mekanism:dust_lapis_lazuli'); // Manual unify to Mek because of ID issues

	replaceAll(`#forge:dusts/ender_pearl`,'ae2:ender_dust'); // Unify to AE2 for Singularity
	replaceAll(`#forge:dusts/ender`,'ae2:ender_dust');

	replaceAll(`#forge:coal_coke`, 'thermal:coal_coke'); // Coal Coke
	replaceAll(`electrodynamics:coalcoke`, 'thermal:coal_coke');
	e.remove({ output: 'electrodynamics:coalcoke' });

	replaceAll(`#forge:silicon`,'ftbic:silicon'); // Silicon
    replaceAll(`ae2:silicon`,'ftbic:silicon');

	e.remove({ input: `#alltheores:ore_hammers` }); // Ore Hammer 

	// Circuits 
    let tiers = ['basic','advanced','elite','ultimate'];
    tiers.forEach(tier =>{
        replaceAll(`#forge:circuits/${tier}`,`mekanism:${tier}_control_circuit`);
        replaceAll(`electrodynamics:circuit${tier}`,`mekanism:${tier}_control_circuit`);
        e.remove({ id: `electrodynamics:circuit${tier}` });
    });
    


	// Used to remove duplicate recipes, can be done later.
	function removeRecipes(ingot){
		console.log(` - Removing recipes for ${ingot}`);

		// THERMAL
		e.remove({ id: `thermal:smelting/${ingot}_ingot_from_dust_blasting` });
		e.remove({ id: `thermal:smelting/${ingot}_ingot_from_dust_smelting` });
		e.remove({ id: `thermal:smelting/${ingot}_ingot_from_ore_blasting` });
		e.remove({ id: `thermal:smelting/${ingot}_ingot_from_ore_smelting` });
		e.remove({ id: `thermal:smelting/${ingot}_ingot_from_deepslate_ore_blasting` });
		e.remove({ id: `thermal:smelting/${ingot}_ingot_from_deepslate_ore_smelting` });
		e.remove({ id: `thermal:smelting/${ingot}_ingot_from_raw_smelting` });
		e.remove({ id: `thermal:smelting/${ingot}_ingot_from_raw_blasting` });
		e.remove({ id: `thermal:storage/${ingot}_block` });
		e.remove({ id: `thermal:storage/raw_${ingot}_block` });
		e.remove({ id: `thermal:storage/raw_${ingot}_from_block` });
		e.remove({ id: `thermal:storage/${ingot}_ingot_from_nuggets` });
		e.remove({ id: `thermal:storage/${ingot}_ingot_from_block` });
		e.remove({ id: `thermal:storage/${ingot}_nugget_from_ingot` });

		// FTB IC
		e.remove({ id: `ftbic:shaped/nuggets/${ingot}_to_${ingot}_ingot` });
		e.remove({ id: `ftbic:shapeless/${ingot}_ingot_to_${ingot}_nugget` });
		e.remove({ id: `ftbic:shapeless/${ingot}_block_to_${ingot}_ingot` });
		e.remove({ id: `ftbic:shaped/${ingot}_ingot_to_${ingot}_block` });
		e.remove({ id: `ftbic:blasting/ores/${ingot}_to_ingot` });
		e.remove({ id: `ftbic:blasting/dusts/${ingot}_to_ingot` });
		e.remove({ id: `ftbic:blasting/raw_materials/${ingot}_to_ingot` });
		e.remove({ id: `ftbic:smelting/ores/${ingot}_to_ingot` });
		e.remove({ id: `ftbic:smelting/raw_materials/${ingot}_to_ingot` });
		e.remove({ id: `ftbic:smelting/dusts/${ingot}_to_ingot` });

		// MEKANISM
		e.remove({ id: `mekanism:processing/${ingot}/ingot/from_nuggets` });
		e.remove({ id: `mekanism:processing/${ingot}/storage_blocks/from_ingots` });
		e.remove({ id: `mekanism:processing/${ingot}/raw_storage_blocks/from_raw` });
		e.remove({ id: `mekanism:processing/${ingot}/raw/from_raw_block` });
		e.remove({ id: `mekanism:processing/${ingot}/ingot/from_block` });
		e.remove({ id: `mekanism:processing/${ingot}/ingot/from_raw_blasting` });
		e.remove({ id: `mekanism:processing/${ingot}/ingot/from_ore_blasting` });
		e.remove({ id: `mekanism:processing/${ingot}/ingot/from_dust_blasting` });
		e.remove({ id: `mekanism:processing/${ingot}/ingot/from_raw_smelting` });
		e.remove({ id: `mekanism:processing/${ingot}/ingot/from_ore_smelting` });
		e.remove({ id: `mekanism:processing/${ingot}/ingot/from_dust_smelting` });
		e.remove({ id: `mekanism:storage_blocks/${ingot}` });
		e.remove({ id: `mekanism:nuggets/${ingot}` });

		// CREATE
		e.remove({ id: `create:blasting/${ingot}_ingot_compat_thermal` });
		e.remove({ id: `create:blasting/ingot_${ingot}_compat_mekanism` });
		e.remove({ id: `create:smelting/${ingot}_ingot_compat_thermal` });
		e.remove({ id: `create:smelting/ingot_${ingot}_compat_mekanism` });
		e.remove({ id: `create:crafting/materials/${ingot}_block_from_compacting`})
		e.remove({ id: `create:crafting/materials/${ingot}_ingot_from_decompacting`})
		e.remove({ id: `create:crafting/materials/${ingot}_nugget_from_decompacting`})
		e.remove({ id: `create:crafting/materials/${ingot}_ingot_from_compacting`})

		// BEYOND EARTH
		e.remove({ id: `beyond_earth:${ingot}_block` });
		e.remove({ id: `beyond_earth:${ingot}_ingot` });
		e.remove({ id: `beyond_earth:${ingot}_ingot_from_nugget` });
		e.remove({ id: `beyond_earth:${ingot}_nugget_from_ingot` });
		e.remove({ id: `beyond_earth:${ingot}_ingot_blasting` });
		

		// ELECTRODYNAMICS
		e.remove({ id: `electrodynamics:resourceblock${ingot}` });
		e.remove({ id: `electrodynamics:ingot${ingot}_from_block` });
		e.remove({ id: `electrodynamics:ingot${ingot}_ingot_smelting` });
		e.remove({ id: `electrodynamics:${ingot}ingot_from_nuggets` });
		e.remove({ id: `electrodynamics:${ingot}nuggets_from_ingot` });

		// GEARS/PLATES/RODS
		e.remove({ id: `industrialforegoing:${ingot}_gear`})
		e.remove({ id: `thermal:parts/${ingot}_gear`})
		e.remove({ id: `ftbic:shaped/ingots/${ingot}_to_${ingot}_gear`})
		e.remove({ id: `electrodynamics:gear${ingot}`})
		e.remove({ id: `electrodynamics:plate${ingot}`})

		// test item2item removal
		e.remove({ id: `electrodynamics:item2item/mineralcrusher/${ingot}_plate_from_${ingot}_ingot`})
	}
})
