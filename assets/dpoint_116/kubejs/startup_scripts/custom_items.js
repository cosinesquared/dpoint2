onEvent('item.registry.tool_tiers', event => {
  event.add('cool', tier => {
    tier.uses = 500
    tier.speed = 6.0
    tier.attackDamageBonus = 2.0
    tier.level = 4
    tier.enchantmentValue = 140
    tier.repairIngredient = '#forge:ingots/iron'
  })
})

onEvent('item.registry', e => {

  e.create('lightning_sword')
  .displayName('§6Lightning Sword')
  .tooltip('§8Strikes targets with lightning!')
  .unstackable()
  .tool('sword', 1)
  .tier('cool')
  .attackDamage(10)
  .group('combat');
  


  e.create('dummy_ammo').group('combat').tooltip('§8Ammunition').displayName('§6Debug Ammo');
  e.create('57mmrocket').group('combat').tooltip('Ammunition').displayName('57MM Rocket')
  e.create('115mmrocket').group('combat').tooltip('Ammunition').displayName('115MM Rocket')
  e.create('120mm2AT').group('combat').tooltip('Ammunition').displayName('120MM 2AT')
  e.create('130mmrocket').group('combat').tooltip('Ammunition').displayName('130MM Rocket')
  e.create('basicammo').group('combat').tooltip('Ammunition').displayName('Paper Cartridge')
  e.create('cupronickelingot').group('combat').tooltip('Material').displayName('Cupronickel Ingot')
  e.create('escargot_ammo').group('combat').tooltip('Ammunition').displayName('57MM Rocket')
  e.create('gunsteel').group('combat').tooltip('Material').displayName('Gun Steel')
  e.create('rocketalloy').group('combat').tooltip("Material"),displayName('Rocket Alloy')
  e.create('hexogen').group('combat').tooltip("Material"),displayName('Hexogen')
  e.create('hitp').group('combat').tooltip("Material"),displayName('HITP')
  e.create('leadsyphnate').group('combat').tooltip("Material"),displayName('Lead Styphnate')
  e.create('nitrocellulose').group('combat').tooltip("Material"),displayName('Nitro-Cellulose')
  e.create('nitroglycerin').group('combat').tooltip("Material"),displayName('Nitro-Glycerin')
  e.create('octogen').group('combat').tooltip("Material"),displayName('Octogen')
  e.create('reinforcedpolymer').group('combat').tooltip("Material"),displayName('Reinforced Polymer')
  e.create('smokelesspowder').group('combat').tooltip("Material"),displayName('Smokeless Powder')




})




