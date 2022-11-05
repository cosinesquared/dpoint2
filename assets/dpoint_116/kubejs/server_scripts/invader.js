onEvent('entity.attack', e => {

    if(e.entity.getName() == "fluxskeletonhybrid"){
        if(e.source.getActual().isPlayer()){
            if(e.entity.persistentData.swapped == 0){
                let ent = e.entity
                let attacker = e.source.getActual()

                let x = (attacker.x - ent.x)^2
                let y = (attacker.y - ent.y)^2
                let z = (attacker.z - ent.z)^2
                let d = Math.sqrt(x+y+z)

                if(d<3){

                    ent.setMainHandItem(Item.of('redstone_arsenal:flux_wrench', '{RepairCost:1,Energy:800000,"quark:RuneAttached":1b,Mode:1,"quark:RuneColor":{id:"quark:blank_rune",Count:1b}}').enchant('minecraft:sharpness', 10))
                    
                    e.entity.persistentData.swapped = 1
                }
            }
        }
    }


    if(e.entity.getName() == 'carbonsuitskeleton'){
        if(e.source.getActual().isPlayer()){
            let target = e.entity
            e.server.runCommandSilent(`playsound minecraft:custom.dpoint.bulletimpactenergy master @e[type=player] ${target.x} ${target.y} ${target.z}`) 
        }
    }

    if(e.entity.persistentData.fluxskeleton == 1){
        let a = java(`currCharges`)
    }

})

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  
function fixDropRate(ent){
    let full = ent.fullNBT 
    full.ArmorDropChances[0] = NBT.floatTag(0);
    full.ArmorDropChances[1] = NBT.floatTag(0);
    full.ArmorDropChances[2] = NBT.floatTag(0);
    full.ArmorDropChances[3] = NBT.floatTag(0);
    
    full.HandDropChances[0] = NBT.floatTag(0);
    full.HandDropChances[1] = NBT.floatTag(0);
   
    ent.mergeFullNBT(full)
}
onEvent("entity.spawned", e => {
   

    let chance = 100//getRandomInt(100)

    inspect(e)

    if(chance<15){
        let v = getRandomInt(3)

        if(v==0){ e.entity.name=('fluxskeletonrange')}
        if(v==1){ e.entity.name=('fluxskeletonmelee')}
        if(v==2){ e.entity.name=('fluxskeletonhybrid')}
                
    }

    if(e.entity.getName() == "fluxskeletonrange"){

        let ent = e.entity

        fixDropRate(ent)

        ent.setMainHandItem(Item.of('redstone_arsenal:flux_bow', '{RepairCost:1,"quark:RuneAttached":1b,Energy:320000,"quark:RuneColor":{id:"quark:blank_rune",Count:1b},Mode:1}').enchant('minecraft:power', 10).enchant('minecraft:infinity', 1))
        ent.setOffHandItem(Item.of('redstone_arsenal:flux_shield', '{Energy:800000,Mode:1}'))
        ent.setHeadArmorItem(Item.of('redstone_arsenal:flux_helmet', '{Energy:800000}'))
        ent.setChestArmorItem(Item.of('redstone_arsenal:flux_chestplate', '{Energy:800000}'))
        ent.setLegsArmorItem(Item.of('redstone_arsenal:flux_leggings', '{Energy:800000}'))
        ent.setFeetArmorItem(Item.of('redstone_arsenal:flux_boots', '{Energy:800000}'))
        ent.persistentData.fluxskeleton = 1

    }  
    if(e.entity.getName() == "fluxskeletonmelee"){

        let ent = e.entity

        fixDropRate(ent)

        ent.setMainHandItem(Item.of('redstone_arsenal:flux_sword', '{RepairCost:1,Energy:800000,"quark:RuneAttached":1b,Mode:1,"quark:RuneColor":{id:"quark:black_rune",Count:1b}}').enchant('tombstone:plague_bringer', 10).enchant('minecraft:sharpness', 10))
        ent.setOffHandItem(Item.of('redstone_arsenal:flux_shield', '{Energy:800000,Mode:1}'))
        ent.setHeadArmorItem(Item.of('redstone_arsenal:flux_helmet', '{Energy:800000}'))
        ent.setChestArmorItem(Item.of('redstone_arsenal:flux_chestplate', '{Energy:800000}'))
        ent.setLegsArmorItem(Item.of('redstone_arsenal:flux_leggings', '{Energy:800000}'))
        ent.setFeetArmorItem(Item.of('redstone_arsenal:flux_boots', '{Energy:800000}'))
        ent.persistentData.fluxskeleton = 1
    }  

    if(e.entity.getName() == "fluxskeletonhybrid"){

        let ent = e.entity

        fixDropRate(ent)

        ent.persistentData.swapped = 0
        //ent.setMainHandItem(Item.of('redstone_arsenal:flux_wrench', '{RepairCost:1,Energy:800000,"quark:RuneAttached":1b,Mode:1,"quark:RuneColor":{id:"quark:blank_rune",Count:1b}}').enchant('minecraft:sharpness', 5))
        ent.setMainHandItem(Item.of('redstone_arsenal:flux_bow', '{RepairCost:3,Energy:320000,"quark:RuneAttached":1b,Mode:1,"quark:RuneColor":{id:"quark:blank_rune",Count:1b}}').enchant('minecraft:power', 5).enchant('minecraft:infinity', 1))
        ent.setOffHandItem(Item.of('redstone_arsenal:flux_shield', '{Energy:800000,Mode:1}'))
        ent.setHeadArmorItem(Item.of('redstone_arsenal:flux_helmet', '{Energy:800000}'))
        ent.setChestArmorItem(Item.of('redstone_arsenal:flux_chestplate', '{Energy:800000}'))
        ent.setLegsArmorItem(Item.of('redstone_arsenal:flux_leggings', '{Energy:800000}'))
        ent.setFeetArmorItem(Item.of('redstone_arsenal:flux_boots', '{Energy:800000}'))
        ent.persistentData.fluxskeleton = 1
    }  

    if(e.entity.getName() == "carbonsuitskeleton"){

        let ent = e.entity

        fixDropRate(ent)

        ent.setMainHandItem(Item.of('mekanismtools:refined_obsidian_axe', '{Damage:0}'))
        ent.setHeadArmorItem(Item.of('ftbic:carbon_helmet', '{Unbreakable:1,AttributeModifiers:[{AttributeName:"generic.armor",Amount:80,Name:"generic.armor",UUID:[I;-122315,19870,21545,-39740]},{AttributeName:"generic.knockback_resistance",Amount:100,Name:"generic.knockback_resistance",UUID:[I;-122315,19970,21545,-39940]},{AttributeName:"generic.movement_speed",Amount:0.3,Name:"generic.movement_speed",UUID:[I;-122315,20070,21545,-40140]}]}'))
        ent.setChestArmorItem(Item.of('ftbic:carbon_chestplate', '{Energy:1000000.0d,Unbreakable:1}'))
        ent.setLegsArmorItem(Item.of('ftbic:carbon_leggings', '{Unbreakable:1}'))
        ent.setFeetArmorItem(Item.of('ftbic:carbon_boots', '{Unbreakable:1}'))

    }  
    
});


