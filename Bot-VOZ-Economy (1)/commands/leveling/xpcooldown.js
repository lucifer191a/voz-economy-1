module.exports = ({
    name: "expcooldown",
    aliases: ['xpcooldown'],
    description: "Thay đổi thời gian hồi EXP của máy chủ",
    category: "leveling",
    usage: "expcooldown <number in seconds>",
    code: `$description[✅ Đã thay đổi EXP cooldown thành "$message".]
    $color[RANDOM]
    $setServerVar[expcd;$message]
    $onlyIf[$message!=;{description:Bạn phải chỉ định một thông báo để thay đổi thời gian hồi EXP của máy chủ!(In seconds)
        Example - $getServerVar[prefix]expcooldown 1 (1 minute)}{color:RANDOM}]
   $onlyIf[$checkContains[$channelType;text;news]==true;]
   $onlyIf[$checkContains[$getServerVar[leveling];enable;enabled]==true;{description: Leveling is not enabled in this server! To enable it, do \`$getServerVar[prefix]leveling enable\`}{color:RANDOM}]
   $onlyPerms[manageserver;{description:❌ You require these permissions - **Manage Server** }{color:RANDOM}]`
  })
