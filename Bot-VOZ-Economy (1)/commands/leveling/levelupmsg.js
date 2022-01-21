module.exports = ({
    name: "$alwaysExecute",
    code: `
   $description[Gáy hăng đấy <@$authorID>! Đã lên **$getUserVar[level]** và được thưởng $random[50;2000]💴!]
   $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[50;2000]]]
   $color[RANDOM]
   $setUserVar[req;$multi[$getUserVar[req];2]]
   $setUserVar[xp;0]
   $setUserVar[level;$sum[$getUserVar[level];1]]
   $onlyIf[$getUserVar[req]<$getUserVar[xp];]
   $onlyIf[$checkContains[$channelType;text;news]==true;]
   $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;]
   $suppressErrors
   `
   })
