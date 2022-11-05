onEvent('entity.attack', event =>{

    if(event.entity.isPlayer()){
        let attacker = event.getSource().getActual()
        let amt = event.getDamage()
        let target = event.entity

        if(target.isPlayer()){ //  && attacker!=null

            
            event.server.runCommandSilent(`playsound minecraft:custom.dpoint.bulletimpactenergy master @e[type=player] ${target.x} ${target.y} ${target.z}`)
        }

        
        if(target.isPlayer() && target.persistentData.damagedByAP == 1){
            console.log(target.persistentData.damagedByAP)
            event.server.runCommandSilent(`playsound minecraft:custom.dpoint.overheat master @e[type=player] ${target.x} ${target.y} ${target.z}`)
            target.persistentData.damagedByAP = 0
            console.log(target.persistentData.damagedByAP)
        }
        //inspectnew(event.source)

    }
})