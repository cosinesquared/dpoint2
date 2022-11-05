onEvent('block.registry', event => {
    event.create('array_middle')
        .material('iron')
        .hardness(10)
        .displayName('§6Permanent Array (Core)')
        .randomTick(e => {
            e.server.runCommandSilent(`playsound minecraft:custom.dpoint.array master @e[type=player] ${e.block.x} ${e.block.y} ${e.block.z}`)
        })

    event.create('array_top')
        .material('iron')
        .hardness(10)
        .displayName('§6Permanent Array (Top)')
        .randomTick(e => {
            e.server.runCommandSilent(`playsound minecraft:custom.dpoint.array master @e[type=player] ${e.block.x} ${e.block.y} ${e.block.z}`)
    })

    event.create('array_bottom')
        .material('iron')
        .hardness(10)
        .displayName('§6Permanent Array (Bottom)')
        .randomTick(e => {
            e.server.runCommandSilent(`playsound minecraft:custom.dpoint.array master @e[type=player] ${e.block.x} ${e.block.y} ${e.block.z}`)
    })
  })


