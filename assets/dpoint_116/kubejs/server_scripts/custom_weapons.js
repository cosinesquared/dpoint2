
onEvent('entity.attack', event =>{

    if(event.entity.isPlayer()){
    //inspectnew(event)
    //inspectnew(event.getSource())
    //inspectnew(event)
}   

    if(event.getSource().getPlayer()){
        let ply = event.getSource().getPlayer()
        let amt = event.getDamage()
        let target = event.entity
        let item = ply.getMainHandItem()
        if( ply.isPlayer() ){
            if( !ply.isFake() ){
                

                if(item == 'kubejs:lightning_sword'){
                console.log(`intercepted attack event`)
                //event.cancel()
                //target.attack(amt*10)
                event.server.runCommandSilent(`/summon lightning_bolt ${target.x} ${target.y} ${target.z}`)
                //event.server.runCommandSilent(`/title ${ply.getName()} times 0 20 0`)
                //event.server.runCommandSilent(`/title ${ply.getName()} title {"text":"Executed!","color":"red"}`)
                //console.log(target.id);
                //event.server.runCommand(`/execute at ${target.id} run summon minecraft:lightning_bolt`)
                }
            }
        }
    }
})

function apdamage(target, damage){
    target.persistentData.damagedByAP = 1
    if( (target.getHealth()-damage)<0 ){
        target.attack("ieRevolver_armorPiercing", 1000000)
    }
    target.setHealth(Math.max(target.getHealth()-(damage-1),1)) //target.getHealth()-1)
    target.attack("ieRevolver_armorPiercing", 1) // 'flux' can also be used
}
onEvent("item.right_click", e => {
    let item = e.getItem().getId()
    let ply = e.player
    
    if(item == 'minecraft:enchanted_golden_apple'){
        e.server.runCommand(`effect give ${ply} minecraft:instant_health 1 100`)

    }

    if(e.getItem() == Item.of('minecraft:stick', "{display:{Name:'{\"text\":\"dev.latvian.kubejs.entity.DamageSourceJS\"}'},kjsdamageitem:1b}")){
        //let DamageSource = new java("net.minecraft.util.DamageSource".setDamageBypassesArmor())
        //let DS2 = new DamageSource("cramming")
        //inspectj(DamageSource)
        //inspectj(DS2)
        //func_76348_h
        //ieRevolver_armorPiercing
        //apdamage(ply,5)
        ply.attack(10)
    }
    if(e.getItem() == Item.of('minecraft:stick', "{kjsapdamageitem:1b,display:{Name:'{\"text\":\"dev.latvian.kubejs.entity.LivingEntityAttackEventJS\"}'}}")){
        //let DamageSource = new java("net.minecraft.util.DamageSource".setDamageBypassesArmor())
        //let DS2 = new DamageSource("cramming")
        //inspectj(DamageSource)
        //inspectj(DS2)
        //func_76348_h
        //ieRevolver_armorPiercing
        console.log(item)
        apdamage(ply,5)
    }   
});