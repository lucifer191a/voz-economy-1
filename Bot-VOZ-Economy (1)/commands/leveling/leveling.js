module.exports = ({
    name: "leveling",
    aliases: ['lvling'],
    description: "Thay đổi xem nên bật hay tắt tính năng Level trong máy chủ",
    usage: "leveling <enable/disable>",
    category: "leveling",
    code: `$color[RANDOM]
    $description[✅ Leveling hiện tại đang "$getServerVar[leveling]".]
    $setServerVar[leveling;$toLowerCase[$message[1]]]
    $onlyIf[$getServerVar[leveling]!=$message[1];{description: Leveling đã sẵn sàng $message[1]!}{color:RANDOM}]
    $onlyIf[$checkContains[$message[1];enable;disable;enabled;disabled]==true;{description: Vui lòng chọn "enable" hoặc "disable"!}{color:RANDOM}]
    $onlyIf[$message[1]!=; {description: Vui lòng xác định "enable" hoặc "disable" leveling trên server!}{color:RANDOM}]
    $onlyPerms[manageserver;{description:❌ You require these permissions - **Manage Server** }{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]`
})
