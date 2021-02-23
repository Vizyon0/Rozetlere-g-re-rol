//maine atın bu kodu selamlar Vizyon#7185

client.on("message", msg => { 
  let flaggie = msg.author.flags
  if (flaggie.any("PARTNERED_SERVER_OWNER")) {
  let member = msg.author
  const partner = msg.guild.roles.cache.find(r => r.id === "")
  let vizyon = msg.guild.member(member) 
  vizyon.roles.add(partner)
  } if (flaggie.any("DISCORD_EMPLOYEE")) {
   let member = msg.author
   const employee = msg.guild.roles.cache.find(r => r.id === "")
   let vizyon = msg.guild.member(member)
   vizyon.roles.add(employee)
  } if (flaggie.any("DISCORD_PARTNER")) {
    let member = msg.author
    const partners = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(partners)
  } if (flaggie.any("EARLY_SUPPORTER")) {
    let member = msg.author
    const supporter = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(supporter)
  } if (flaggie.any("EARLY_VERIFIED_DEVELOPER")) {
    let member = msg.author
    const developer = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(developer)
  } if (flaggie.any("HOUSE_BALANCE")) {
    let member = msg.author
    const balance = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(balance)
  } if (flaggie.any("HOUSE_BRAVERY")) {
    let member = msg.author
    const bravery = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(bravery)
  } if (flaggie.any("HOUSE_BRILLIANCE")) {
    let member = msg.author
    const brilliance = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(brilliance)
  } if (flaggie.any("HYPESQUAD_EVENTS")) {
    let member = msg.author
    const hypesquad = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(hypesquad)
  } if (flaggie.any("BUGHUNTER_LEVEL_1")) {
    let member = msg.author
    const bughunter1 = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(bughunter1)
  } if (flaggie.any("BUGHUNTER_LEVEL_2")) {
    let member = msg.author
    const bughunter2 = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(bughunter2)
  } if (flaggie.any("SYSTEM")) {
    let member = msg.author
    const system = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(system)
  } if (flaggie.any("TEAM_USER")) {
    let member = msg.author
    const teamuser = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(teamuser) 
  } if (flaggie.any("VERIFIED_BOT")) {
    let member = msg.author
    const verifiedbot = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(verifiedbot) 
  } if (flaggie.any("VERIFIED_DEVELOPER")) {
    let member = msg.author
    const verifieddeveloper = msg.guild.roles.cache.find(r => r.id === "")
    let vizyon = msg.guild.member(member)
    vizyon.roles.add(verifieddeveloper) 
  } 
})
