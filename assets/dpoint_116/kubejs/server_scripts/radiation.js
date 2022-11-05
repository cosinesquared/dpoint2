onEvent("player.tick", e => {
    //console.log(e.player);
    if(e.player.getMainHandItem() == 'alltheores:uranium_ingot'){
       
        //let full = e.player.fullNBT.ForgeCaps
        //console.log(full["mekanism:radiation"])

        //let rads = NBT.compoundTag()//{radiation: 1.0}
        //rads['radiation'] = NBT.doubleTag(1.0);
        //console.log(rads)

        //full["mekanism:radiation"] = rads
        //console.log(full["mekanism:radiation"])
        //e.player.mergeFullNBT(full)
        //console.log(e.player.nbt)
        //console.log(r)
       // ply = e.player
        //mekanism.api.radiation.radiate(ply,1.0)

        //let rads = e.player.persistentData.radiation +0.1 || 0

        //e.player.persistentData.radiation = rads


        let msvh = 1

        let full = e.player.fullNBT //+ 0.1
        let rads = full.ForgeCaps["mekanism:radiation"].radiation+ msvh/60/60/20
        
        full.ForgeCaps["mekanism:radiation"].radiation = rads

        e.player.mergeFullNBT(full)

        //e.player.fullNBT.ForgeCaps["mekanism:radiation"] = rads
        console.log(`overwrite data: ${rads}`)

        console.log(`mekanism radiation: ${e.player.fullNBT.ForgeCaps["mekanism:radiation"]}`)

    }
});