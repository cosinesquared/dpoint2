onEvent('recipes', e => {
    function caTier(tier, corners, processor, cables) {
      utils.listOf(['importer', 'exporter', 'constructor', 'destructor', 'disk_manipulator', 'requester']).forEach(caType => {
        e.shaped(`cabletiers:${tier}_${caType}`, [`a a`, `bcb`, `a a`], {
          a: corners,
          b: processor,
          c: `${(caType == 'requester' && tier == 'elite') ? 'rsrequestify:' : cables}${caType}`
        })
      })
    }
  
    e.remove({ mod: 'cabletiers' })
  
    energize(e, ['refinedstorage:wireless_grid'], 'refinedstorage:creative_wireless_grid', '2147483647')
    energize(e, ['refinedstorage:wireless_fluid_grid'], 'refinedstorage:creative_wireless_fluid_grid', '2147483647')
    energize(e, ['refinedstorage:wireless_crafting_monitor'], 'refinedstorage:creative_wireless_crafting_monitor', '2147483647')
    energize(e, ['refinedstorageaddons:wireless_crafting_grid'], 'refinedstorageaddons:creative_wireless_crafting_grid', '2147483647')
    energize(e, ['refinedstorage:portable_grid'], 'refinedstorage:creative_portable_grid', '2147483647')

  
    caTier(`elite`, `#forge:storage_blocks/iron`, `refinedstorage:improved_processor`, `refinedstorage:`)
    caTier(`ultra`, `#forge:storage_blocks/diamond`, `refinedstorage:advanced_processor`, `cabletiers:elite_`)
  
  
    modifySmelt(e, 'refinedstorage:silicon', '#appliedenergistics2:crystals/quartz')
  })
  