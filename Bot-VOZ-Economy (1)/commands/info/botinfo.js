module.exports = ({
    name: "botinfo", 
    aliases: ['botstats'],
    description: "Kiểm tra thông tin / số liệu thống kê của bot",
    usage: "",
    category: "information",
    code: `$title[Botinfo ($username[$clientID])]
    $color[RANDOM]
    $thumbnail[$userAvatar[$clientID]]
    $addField[RAM; $ramMB]
    $addField[CPU đã sử dụng; $cpu/100]
    $addField[Ping; $pingms]
    $addField[Thời gian hoạt động;$uptime]
    
    
    
    
    $addField[Phiên bản;1.0.0]
    $addField[Ngày sinh;$creationDate[$clientID]]
    $addField[Developer;$userTag[$botOwnerID]]
    $addTimestamp
    $cooldown[5s;{description:Thao tác quá nhanh, vui lòng chờ **%time%**!}{color:RANDOM}]`
    })
