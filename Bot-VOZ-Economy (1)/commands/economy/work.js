module.exports = ({
    name: "work",
    desription: "Có làm thì mới có ăn!",
    usage: "",
    category: "economy",
    code: `$color[RANDOM]
    $description[Bạn đã đi làm và nhận $random[50;2000]💴!]
    $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[50;2000]]]
    $globalCooldown[1h;{description: Nghỉ ngơi chút đi, **%time%** mới phải làm tiếp!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`    
})
