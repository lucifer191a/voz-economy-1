module.exports = ({
    name: "pay",
    aliases: ['give'],
    description: "Thanh toán/ gửi tiền cho người khác",
    usage: "pay <amount> <user>",
    category: "economy",
    code: `$color[RANDOM]
    $author[$userTag[$findMember[$messageSlice[1]]];$userAvatar[$findMember[$messageSlice[1]]]]
    $description[<@$findMember[$messageSlice[1]]> đã được trả/gửi $message[1]💴 bởi <@$authorID>!]
    $setGlobalUserVar[money;$sum[$getGLobalUserVar[money;$findMember[$messageSlice[1]]];$message[1]];$findMember[$messageSlice[1]]]
    $setGlobalUserVar[money;$sub[$getGLobalUserVar[money];$message[1]]]
    $onlyIf[$getGlobalUserVar[money]>=$message[1];{description: Bạn không đủ $message[1]💴 để thực hiện giao dịch này!}{color:RANDOM}]
    $onlyIf[$isBot[$findMember[$messageSlice[1]]]==false;{description:Bot không cần dùng đến tiền!}{color:RANDOM}]
    $onlyIf[$checkContains[$findMember[$messageSlice[1]];$authorID]==false;{description: Bạn cần tag một thành viên để thực hiện giao dịch 💴!}{color:RANDOM}]
    $onlyIf[$isNumber[$message[1]]==true;{description: Viết số tiền trước khi tag!}{color:RANDOM}]
    $onlyIf[$message[1]!=;{description: Bạn cần phải viết rõ số 💴 được cấp!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    $suppressErrors[{description: Correct Usage: $getServerVar[prefix]pay <amount> <user>}{color:RANDOM}]
    `
})
