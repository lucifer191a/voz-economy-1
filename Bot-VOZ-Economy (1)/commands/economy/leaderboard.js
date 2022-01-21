module.exports = ({
    name: "leaderboard",
    aliases: ['lb'],
    description: "Check bảng xếp hạng tiền",
    usage: "",
    category: "economy",
    code: `$title[Money Leaderboard]
    $color[RANDOM]
    $description[$globalUserLeaderBoard[money;asc; {top}. {username} - {value}💴]]
    $cooldown[5s;{description:Thao tác quá nhanh, vui lòng chờ **time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
