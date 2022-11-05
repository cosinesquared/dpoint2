// credit ATM team
onEvent('worldgen.remove', e => {
    e.removeOres(ore => {
      ore.blocks = [
          'powah:dry_ice'
        ]
    })
})
  
