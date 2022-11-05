onEvent('item.tooltip', e => {
    tooltip.addAdvanced(Item.of('custommachinery:custom_machine_item'), (item, adv, text) => {
        if(item.hasNBT()){ 
            if(item.nbt=='{machine:"custommachinery:rtg"}'){
                text.add(0, Text.of('§6Permanent Array (Core)'))    
                text.add("Requires bottom and top blocks")          
                // Adds text in first line, replacing title. If you want 2nd line, the index must be 1
            }
        }else{
        }
    })

})  