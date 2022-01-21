module.exports = ({
    name: "roleinfo",
    aliases: ['roleinformation'],
    description: "Biết thông tin cụ thể của role trên server",
    usage: "roleinfo <role>",
    category: "information",
    code: `$color[$role[$findRole[$message];hex]]
    $author[$userTag;$authorAvatar]
    $title[Role Information]
    $addField[Hoisted; $replaceText[$replaceText[$checkCondition[$isHoisted[$findRole[$message]]==true];true;Yes];false;No];yes]
    $addField[Mentionable; $replaceText[$replaceText[$checkCondition[$isMentionable[$findRole[$message]]==true];true;Yes];false;No];yes]
    $addField[Hex; $role[$findRole[$message];hex];yes]
    $addField[ID; $findRole[$message];yes]
    $addField[Position; $role[$findRole[$message];position];yes]
    $addField[Creation Date; $role[$findRole[$message];created];yes]
    $addTimestamp
    $onlyIf[$findRole[$message]!=;{description: :x: Role này không tồn tại!}{color:RANDOM}]
    $onlyIf[$message!=;{description:Bạn phải chỉ định một role để xem thông tin của role đó!}{color:RANDOM}]
    $suppressErrors[{description:Đã xảy ra lỗi! Vui lòng liên hệ với Developer nếu điều này tiếp tục xảy ra!}{color:RANDOM}]
    $cooldown[5s;{description:Thao tác quá nhanh, vui lòng chờ **%time%**!}{color:RANDOM}]
    $onlyIf[$checkContains[$channelType;text;news]==true;]
    `
})
