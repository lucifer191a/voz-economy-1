
module.exports = ({
    name: "exp",
    aliases: ['xp'],
    description: "Kiểm tra EXP hiện tại của bạn hoặc của người khác",
    usage: "exp (user)",
    category: "leveling",
    code: `$color[RANDOM]
    
    $description[<@$findMember[$message]>'s EXP hiện tại là **$getUserVar[xp;$findMember[$message]]**!
Cần **$replaceText[$sub[$sum[$getUserVar[req;$findMember[$message]];0];$getUserVar[xp;$findMember[$message]]];-; ;1]** EXP để đạt được Level **$sum[$getUserVar[level;$findMember[$message]];1]**!]
$cooldown[5s;{description:Thao tác quá nhanh, vui lòng chờ **%time%**!}{color:RANDOM}{delete:$getCooldownTime[globalUser;exp;$authorID;yes]ms}]
$onlyIf[$isBot[$findMember[$message]]==false;{description: Tag một người dùng, không phải bot!}{color:RANDOM}]
$onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;{description: Leveling is not enabled in this server! To enable it, do \`$getServerVar[prefix]leveling enable\`}{color:RANDOM}]
$onlyIf[$checkContains[$channelType;text;news]==true;]`
})
