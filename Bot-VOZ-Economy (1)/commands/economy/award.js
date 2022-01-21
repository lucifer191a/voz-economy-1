module.exports = ({
    name: "award",
    aliases: ['reward'],
    description: "Tặng cho user một số tiền",
    usage: "award <amount> <user>",
    category: "economy",
    code: `$color[RANDOM]
    $author[$userTag[$findMember[$messageSlice[1]]];$userAvatar[$findMember[$messageSlice[1]]]]
    $description[<@$findMember[$messageSlice[1]]> đã được tặng $message[1]💴!]
    $setGlobalUserVar[money;$sum[$getGLobalUserVar[money;$findMember[$messageSlice[1]]];$message[1]];$findMember[$messageSlice[1]]]
    $onlyIf[$isBot[$findMember[$message[2]]]==false;{description: Tại sao không thử đề cập đến một người dùng không phải là bot?}{color:RANDOM}]
    $onlyIf[$findMember[$message[2]]!=;{description: <@$botOwnerID>, có thể thử đề cập đến một người dùng khác?}{color:RANDOM}]
    $onlyIf[$isNumber[$message[1]]==true;{description: Vui lòng viết rõ số lượng!}{color:RANDOM}]
    $onlyIf[$message[1]!=;{description: Viết rõ số tiền được tặng.}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;{description: Please do this in a guild!}{color:RANDOM}]
    $onlyForIDs[$botOwnerID;{description:❌ You are not my Developer}{color:RANDOM}]
    $suppressErrors[{description: Correct Usage: $getServerVar[prefix]award <amount> <user>}{color:RANDOM}]
    `
})
