onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
      ores.blocks = [ 
        'ftbic:aluminum_ore',
        'ftbic:deepslate_aluminum_ore',
        'ftbic:tin_ore',
        'ftbic:deepslate_tin_ore',
        'ftbic:lead_ore',
        'ftbic:deepslate_lead_ore',
        'ftbic:uranium_ore',
        'ftbic:deepslate_uranium_ore'
    ] 
    })
    //event.printFeatures('underground_ores')
})