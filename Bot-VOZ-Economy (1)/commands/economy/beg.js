module.exports = ({
    name: "beg",
    description: "Ăn xin",
    usage: "",
    category: "economy",
    code: `$color[RANDOM]
    $description[Hoàn cảnh khó khăn, bạn đã đi ăn xin và được $random[10;500]💴!]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[10;500]]]
    $globalCooldown[600s;{description: Có làm thì mới có ăn, **%time%!** nữa mới được xin tiếp!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`    
})
