onEvent('server.custom_command', event => {
    if (event.player.op) {
        if (event.id == 'give_zeropointmodule') {
                event.player.give(Item.of('mekanism:energy_tablet', "{display:{Lore:['[{\"text\":\"A coveted piece of Ancient technology.\",\"italic\":false,\"color\":\"dark_purple\"},{\"text\":\"\",\"italic\":false,\"color\":\"dark_purple\"}]','[{\"text\":\"The immense power these modules contain can be harnessed to power almost anything for extreme lengths,\",\"italic\":false,\"color\":\"gray\"}]'],Name:'[{\"text\":\"Zero Point Module\",\"italic\":false,\"color\":\"gold\"}]'},mekData:{EnergyContainers:[{Container:0b,stored:\"5368709117.5000\"}]},zeropoint:1}")) 
        }
        else if(event.id == 'give_damage'){
            event.player.give(Item.of('minecraft:stick', "{kjsdamageitem:1b,display:{Name:'{\"text\":\"dev.latvian.kubejs.entity.DamageSourceJS\"}'}}"))
        }
        else if(event.id == 'give_damage2'){
            event.player.give(Item.of('minecraft:stick', "{kjsapdamageitem:1b,display:{Name:'{\"text\":\"dev.latvian.kubejs.entity.LivingEntityAttackEventJS\"}'}}"))
        }        
        else if(event.id =='summon_fluxskeletonhybrid'){
            let p = event.player
            event.server.runCommand(`summon minecraft:skeleton ${p.x} ${p.y} ${p.z} {CustomName:'[{"text":"fluxskeletonhybrid"}]'}`)
        }
        else if(event.id =='summon_fluxskeletonmelee'){
            let p = event.player
            event.server.runCommand(`summon minecraft:skeleton ${p.x} ${p.y} ${p.z} {CustomName:'[{"text":"fluxskeletonmelee"}]'}`)
        }
        else if(event.id =='summon_fluxskeletonrange'){
            let p = event.player
            event.server.runCommand(`summon minecraft:skeleton ${p.x} ${p.y} ${p.z} {CustomName:'[{"text":"fluxskeletonrange"}]'}`)
        }
        else if(event.id =='summon_fluxskeletons'){
            let p = event.player
            event.server.runCommand(`summon minecraft:skeleton ${p.x} ${p.y} ${p.z} {CustomName:'[{"text":"fluxskeletonrange"}]'}`)
            event.server.runCommand(`summon minecraft:skeleton ${p.x} ${p.y} ${p.z} {CustomName:'[{"text":"fluxskeletonmelee"}]'}`)
            event.server.runCommand(`summon minecraft:skeleton ${p.x} ${p.y} ${p.z} {CustomName:'[{"text":"fluxskeletonhybrid"}]'}`)
        }
        else if(event.id =='summon_carbonsuitskeleton'){
            let p = event.player
            event.server.runCommand(`summon minecraft:skeleton ${p.x} ${p.y} ${p.z} {CustomName:'[{"text":"carbonsuitskeleton"}]'}`)
        }
    }

})