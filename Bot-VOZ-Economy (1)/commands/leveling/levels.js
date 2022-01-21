module.exports = ({
    name: "levels",
    aliases: ['lvls', 'levelleaderboard', 'lvlleaderboard', 'levellb', 'lvllb'],
    description: "Xem bảng xếp hạng level",
    usage: "",
    category: "leveling",
    code: `$title[Bảng Xếp HạngLevel]
    $description[$userLeaderboard[level;asc;{top}. {username} - Level {value}]]
    $color[RANDOM]
    $cooldown[5s;{description:Thao tác quá nhanh, vui lòng chờ **time%**!}{color:RANDOM}{delete:$getCooldownTime[globalUser;levels;$authorID;yes]ms}]
    $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;{description: Leveling is not enabled in this server! To enable it, do \`$getServerVar[prefix]leveling enable\`}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
