module.exports = ({
    name: "roulette",
    aliases: ['rl'],
    description: "Đỏ đen đúng nghĩa.",
    usage: "roulette <amount> <red/black>",
    category: "economy",
    code: `$color[RANDOM]
   $title[__Roulette Game__]
   $thumbnail[$authorAvatar]
   $setGlobalUserVar[money;$sum[$getGlobalUserVar[money];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[2]]==$randomText[red;black]];true;$message[1]];false;-$message[1]]]]
   
   $description[Bạn chọn: **$replaceText[$replaceText[$toLowercase[$message[2]];red;red (🔴)];black;black (⚫)]**.
Được ăn cả, ngã vào lòng em...]
   $editIn[5s;{color:RANDOM}{description: Bóng đã lăn vào ô __**$randomText[red;black]**__!
   
   $replaceText[$replaceText[$checkCondition[$toLowercase[$message[2]]==$randomText[red;black]];true;Bạn thắng **$message[1]**💴!];false;Bạn thua **$message[1]**💴.] 
   
   Số dư còn lại: **$sum[$getGlobalUserVar[money];$replaceText[$replaceText[$checkCondition[$toLowercase[$message[2]]==$randomText[red;black]];true;$message[1]];false;-$message[1]]]**💴.}]
   $addTimestamp
   $onlyIf[$getGlobalUserVar[money]>=$message[1];{description:description:Không đủ tiền!}{color:RANDOM}]
   $onlyIf[$isNumber[$message[1]]==true;{description: Vui lòng viết số tiền đặt cược!}{color:RANDOM}]
   $onlyIf[$checkContains[$message[2];red;black]==true;{description:Chọn **red** hoặc **black**!}{color:RANDOM}]
   $onlyIf[$message[1]!=;{description: Bạn cần chỉ định số lượng 💴 để chơi roulette!}{color:RANDOM}]
   $globalCooldown[10s;{description: Chờ một chút, đang dọn sòng. Tiếp tục trong **%time%**!}{color:RANDOM}]
   $onlyIf[$checkContains[$channelType;text;news]==true;]`
   });
