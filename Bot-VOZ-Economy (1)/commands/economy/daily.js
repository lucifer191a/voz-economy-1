module.exports = ({
    name: "daily",
    description: "Nhận tiền trợ cấp hàng ngày!",
    usage: "",
    category: "economy",
    code:`
$setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$random[100;5000]]]
$color[RANDOM]
$description[Bạn đã nhận tiền trợ cấp hàng ngày và được $random[100;5000]💴!]
$globalCooldown[1d;{description: Có thể nhận tiền trợ cấp ngày mai trong **%time%**!}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})
